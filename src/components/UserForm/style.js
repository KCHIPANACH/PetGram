import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

export const Title = styled.h4`
margin:20px 0 10px;
text-align:center;
font-size:15px;
font-weight:300;
`

export const Form = styled.form`
padding:10px 40px;
`

export const Input = styled.input`
width:100%;
border:1px solid #ccc;
border-radius:3px;
margin-bottom:20px;
padding:8px 6px;
display:block;
transition:all 500ms;
outline:none;
&[disabled]{
     opacity:.3;
 }
`
export const Img = styled.img`
    max-width: 200px;
    margin: 0 auto;
    display: block;
`

export const Contenedor = styled.div`
    margin-top:15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cambio = styled.button`
    color:rgba(182, 109, 246, 1);
    font-weight:bold;
    font-size:15px;
    outline:none;
    cursor: pointer;
    background:transparent;
    border:none;
`

export const TitleButton = styled.h4`
margin:0;
text-align:center;
font-size:15px;
font-weight:300;
`
