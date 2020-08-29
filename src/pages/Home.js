import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import {Layout} from '../components/Layout'

const HomePage=({id})=>{
    return(
        <> 
        <Layout title="Inicio" subtitle="PetGram Tu app donde encontraras tus mascotas bonitas 🐶"/>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
        {/* eslint-disable-next-line react/jsx-closing-tag-location  */}
      </>        
    )
}
 
export default React.memo(HomePage, (prevProps, props)=>{
  return prevProps.id == props.id
})