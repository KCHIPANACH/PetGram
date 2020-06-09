import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ArticleWrapper = styled.article`
position:relative;
margin-bottom:35px;
min-height:250px; /* Esto por que el intersection observe en el primer renderizado los detecta dentro del viewport ya que al no tener altura estan todos juntos, al ponerle una altura minima empujamos el viewport de manera que logremos el efecto esperado*/
`

export const ImgWrapper = styled.div`
    border-radius:10px;
    display:block;
    height: 0;
    overflow:hidden;
    padding:56.25% 0 0 0;
    position:relative;
    width:100%;
`
export const Img = styled.img`
${fadeIn()}
box-shadow:0px 10px 14px rgba(0,0,0,.2);
height:100%;
border-radius: 10px;
object-fit:cover;
position:absolute;
top:0;
width:100%;
`
