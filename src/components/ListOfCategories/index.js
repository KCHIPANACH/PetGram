import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Category } from '../Category'
import { List, Item, WrapperDiv } from './styles'

/* Base de datos temporal hasta hacer el fetching con la api Graph */
/* import { categories } from '../Prueba/db.json' */

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgrambackend.now.sh/categories')
      .then(resp => resp.json())
      .then(response => {
        setLoading(false)
        setCategories(response)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const nowShowFixed = window.scrollY > 200
      showFixed !== nowShowFixed && setShowFixed(nowShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    /* Limpiar eventos
    useEffect devuelve una función la cual podemos usar para limpiar los eventos
    */
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? [1, 2, 3, 4, 5].map((item, key) => <WrapperDiv key={key}><Skeleton width={90} height={90} circle />  <Skeleton width={25} height={25} circle /> </WrapperDiv>)
          : categories.map((category, key) => <Item key={key}> <Category {...category} /> </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
