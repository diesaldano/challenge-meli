import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../interfaces/types'

export default {
  search: (query: string): any => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then( res => res.json())
      .then( data => {
        return data.results.map( (item: any) => {
          let user = item.seller.id
          //get user data
          let userData = fetch(`https://api.mercadolibre.com/users/${user}`)
            .then( resUser => resUser.json())
            .then( dataUser => {
              return dataUser
            })
          return {
            id: item.id,
            author: {
              name: item.seller.permalink,
            },
            categories: data.available_filters[0].values.map((category: any) => category.name),
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