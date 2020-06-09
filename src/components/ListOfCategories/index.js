import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Category } from '../Category'
import { List, Item, WrapperDiv } from './styles'
import { useFetchData } from '../../hooks/useFetchData'
import { useOnScroll } from '../../hooks/useOnScroll'

/* Base de datos temporal hasta hacer el fetching con la api Graph */
/* import { categories } from '../Prueba/db.json' */

export const ListOfCategories = () => {
  const [categories, loading] = useFetchData('https://petgrambackend.now.sh/categories')
  const [showFixed] = useOnScroll(200)

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
