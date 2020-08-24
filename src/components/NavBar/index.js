import React from 'react'

import {Nav, Link} from './styles'
import {IoMdHome, IoMdHeartEmpty,IoMdPerson } from 'react-icons/io'

const SIZE = '32px'
export const NavBar =()=>{
    return(
        <>
           <Nav>
            <Link to="/"> <IoMdHome size={SIZE} /> </Link> 
            <Link to="/favs"> <IoMdHeartEmpty size={SIZE} /> </Link> 
            <Link to="/user"> <IoMdPerson size={SIZE} /> </Link> 
          </Nav> 
        </>
    )
}  
