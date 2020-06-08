import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useFetchData } from '../../components/hooks/useFetchData'

export const ListOfPhotoCards = () => {
  const [photos] = useFetchData('https://petgrambackend.now.sh/photos')

  return (
    <ul>
      {
        photos.map((item, key) => <PhotoCard key={key} {...item} />)
      }
    </ul>
  )
}
