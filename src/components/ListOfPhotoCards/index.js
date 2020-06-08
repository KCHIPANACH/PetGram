import React from 'react'
import { PhotoCard } from '../PhotoCard'
/* import { useFetchData } from '../../components/hooks/useFetchData' */

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
query getPhotos{
  photos{
    id,
    categoryId,
    src,
    likes,
    liked,
    userId
  }
}
`)

/* Componentes de orden superior: Son aquellas funciones que se le pasa como parametro un componente y devuelve otro componente ya sea con mejoras o props inyectadas  */

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
/*   const [photos] = useFetchData('https://petgrambackend.now.sh/photos') */

  return (
    <ul>
      {
        photos.map((item, key) => <PhotoCard key={key} {...item} />)
      }
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
