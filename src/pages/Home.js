import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
export const Home=({id})=>{
    return(
        <> <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
        {/* eslint-disable-next-line react/jsx-closing-tag-location  */}
      </>        
    )
}