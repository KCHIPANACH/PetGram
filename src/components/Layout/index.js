import React from 'react'
import {Helmet} from 'react-helmet'

export const Layout = ({title, subtitle})=>{
    return(
        <>
         <Helmet>
            {title && <title>{title} | Petgram 🐶 </title>}
            {subtitle && <meta name="description" content={subtitle}></meta>}
            <meta property='og:type' content='website' />
            <meta property='og:url' content='petgram.com' />
            <meta property='og:title' content='PetgramAPP' />
            <meta property='og:description' content={subtitle} />
            <meta property='og:image' content='urlDemiImagen' />            
         </Helmet>
        </>
    )
}


