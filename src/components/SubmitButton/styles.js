import styled from 'styled-components'

export const Button = styled.button`
width:100%;
display:block;
border-radius:3px;
background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(111, 111, 219, 1) 0%,
    rgba(182, 109, 246, 1) 72.4%);
color:white;
text-align:center;
padding: 10px 0;
text-transform:uppercase;
font-weight:bold;
font-size:15px;
transition:all 500ms;
cursor: pointer;
 &[disabled]{
     opacity:.3;
 }
`