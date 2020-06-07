import styled from 'styled-components'

export const List = styled.ul`
display:flex;
overflow-x:scroll;
width:100%;
list-style:none;
margin-bottom: 22px;
margin-top: -14px;
&::-webkit-scrollbar {display: none;}
`

export const Item = styled.li`
padding:0 8px;
`
