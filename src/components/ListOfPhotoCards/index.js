import React from 'react'
import { PhotoCard } from '../PhotoCard'

/* Componentes de orden superior: Son aquellas funciones que se le pasa como parametro un componente y devuelve otro componente ya sea con mejoras o props inyectadas  */

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map((item, key) => <PhotoCard key={key} {...item} />)
      }
    </ul>
  )
}
