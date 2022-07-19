// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  fetch: (id: string) => {
    return Promise.resolve(null)
  }
}