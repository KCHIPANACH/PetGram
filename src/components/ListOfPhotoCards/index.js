import React from 'react'
import { PhotoCard } from '../PhotoCard'
import Skeleton from 'react-loading-skeleton'
import { WrapperSkeleton } from './styles'

/* Componentes de orden superior(HOC): Son aquellas funciones que se le pasa como parametro un componente y devuelve otro componente ya sea con mejoras o props inyectadas  */

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  console.log(loading)
  return (
    <ul>
      {
        (loading) ? [1, 2, 3, 4, 5].map((item, key) => <WrapperSkeleton key={key}> <Skeleton height={250} /></WrapperSkeleton>)
          : photos.map((item, key) => <PhotoCard key={key} {...item} />)
      }
    </ul>
  )
}
