import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

/* Base de datos temporal hasta hacer el fetching con la api Graph */
/* import { categories } from '../Prueba/db.json' */

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgrambackend.now.sh/categories')
      .then(resp => resp.json())
      .then(response => setCategories(response))
  }, [])

  return (
    <List>
      {
        categories.map((category, key) => <Item key={key}> <Category {...category} /> </Item>)
      }
    </List>
  )
}
