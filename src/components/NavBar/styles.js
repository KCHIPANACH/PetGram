import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'
import {fadeIn} from '../../styles/animation'


export const Nav = styled.nav`
align-items:center;
background:#fcfcfc;
border-top:1px solid #e0e0e0;
bottom:0;
display:flex;
height:50px;
justify-content:space-around;
left:0;
margin:0 auto;
max-width:500px;
position:fixed;
right:0;
width:100%;
z-index:9999;
`

export const Link = styled(LinkRouter)`
align-items:center;
display:inline-flex;
color:#888;
height:100%;
justify-content:center;
text-decoration:none;
width:100%;
outline:none;
cursor:pointer;
transition: all 500ms;
   
   &[aria-current]{ 
        color:#000;
     &:after{
       content:'·';
       ${fadeIn({time:"1s"})}; /* importante cuando pongo una función poner al final el punto y coma para parsear correctamente el css */
       position:absolute;
       bottom:0;
       font-size:34px;
       line-height:20px;
     }        
   }
`