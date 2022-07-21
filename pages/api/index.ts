import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, Filters, PathFromRoot } from '../../interfaces/types'

export default {
  search: (query: string): Promise<Product> => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then( res => res.json())
      .then( data => {
        return data.results.map( (item: Product) => {
          let user = item.seller.id

          return {
            id: item.id,
            author: {
              name: 'Diego',
              lastname: 'Saldano'
            },
            seller: item.seller.permalink,
            categories: data.filters.find( (filter: Filters) => filter.id === 'category')?.values[0].path_from_root.map( (category: PathFromRoot) => category.name) 
            || (data.available_filters[0].values ? data.available_filters[0].values[0].name : data.available_filters[0].name),
            items: [
              {
                id: item.id,
                title: item.title,
                price: {
                  currency: item.currency_id,
                  amount: item.price,
                  decimals: 2,
                },
              }
            ],
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            location: {
              state: item.address.state_name,
              city: item.address.city_name,
            },
          }
        })
      })
  },
  details: async (id: string) => {
    return await fetch(`https://api.mercadolibre.com/items/${id}`)
      .then( res => res.json())
      .then( data => {
        let description = fetch(`https://api.mercadolibre.com/items/${id}/description`)
          .then( resDesc => resDesc.json())
          .then( dataDesc => dataDesc.plain_text ) 

        let user = fetch(`https://api.mercadolibre.com/users/${data.seller_id}`)
          .then( resUser => resUser.json())
          .then( dataUser => dataUser.nickname)
          
        const product = Promise.all([description, data, user])
          .then( ([description, data, user]) => {
            return {
              author: {
                name: user,
              },
              item: {
                id: data.id,
                title: data.title,
                price: {
                  currency: data.currency_id,
                  amount: data.price,
                  decimals: 2,
                },
              },
              picture: data.pictures,
              condition: data.condition,
              free_shipping: data.shipping.free_shipping,
              sold_quantity: data.sold_quantity,
              description: description,
            }
          })

        return product
      })
  }
}