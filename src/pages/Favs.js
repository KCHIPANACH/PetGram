import React from 'react';
import {FavsWithQuery} from '../container/GetFavorites'
import {Layout} from '../components/Layout'

export default ()=>{
    return(
        <>
        <Layout title="Favoritos" subtitle="PetGram Tu app donde encontraras tus mascotas bonitas 🐶" />
        <h1> Favoritos </h1>
        <FavsWithQuery />
        </>
    )

} 