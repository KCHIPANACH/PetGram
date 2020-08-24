import React from 'react'
import { PhotoCardWithQUery } from '../container/PhotoCardWithQuery'

export const Detail = ({detailId})=>{
    return(
        <>
        <PhotoCardWithQUery id={detailId} />
        </>
    )
}