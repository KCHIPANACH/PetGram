import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    window.fetch('https://petgrambackend.now.sh/photos')
      .then(resp => resp.json())
      .then(response => setPhotos(response))
  }, [])

  return (
    <ul>
      {
        photos.map((item, key) => <PhotoCard key={key} {...item} />)
      }
    </ul>
  )
}
