import React from 'react'
import { PhotoCardWithQUery } from '../container/PhotoCardWithQuery'

export default ({detailId})=>{
    return(
        <>
        <PhotoCardWithQUery id={detailId} />
        </>
    )
}