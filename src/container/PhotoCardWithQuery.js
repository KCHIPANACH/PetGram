import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import Skeleton from 'react-loading-skeleton'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
/* El uso de Query de react apollo nos permite usar a lo que se le llama render props, las cuales nos permiten poner una funcion en la cual esta retornara un componente, en la función recibe como parametros loading, error y data */
const renderProp = ({ loading, error, data }) => {
  if (loading) return <Skeleton height={250} />
  if (error) return 'OCURRIO UN ERROR, REINTENTA'
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQUery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>

)
