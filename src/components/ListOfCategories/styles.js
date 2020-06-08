import styled, { css } from 'styled-components'
import { introTopBlur } from '../../styles/animation'

export const List = styled.ul`
display:flex;
overflow-x:scroll;
width:100%;
list-style:none;
margin-bottom: 22px;
margin-top: -14px;
${props => props.fixed && css`
{${introTopBlur()}
    background:#fff;
    border-radius:60px;
    box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.6);
    left:0;
    margin: 0 auto;
    max-width: 450px;
    padding: 5px;
    position:fixed;
    right:0;
    top:-20px;
    transform:scale(.6);
    z-index:1}
`}
&::-webkit-scrollbar {display: none;}
`

export const Item = styled.li`
padding:0 8px;
`
export const WrapperDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100px;
padding: 0 8px;
`
