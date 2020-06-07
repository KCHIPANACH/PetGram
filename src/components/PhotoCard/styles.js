import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ArticleWrapper = styled.article`
position:relative;
margin-bottom:35px
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

export const Button = styled.button`
${fadeIn()}
position: absolute;
bottom: -15px;
display: flex;
justify-content: center;
align-items: center;
padding: 5px 6px;
background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(111, 111, 219, 1) 0%,
    rgba(182, 109, 246, 1) 72.4%
  );
border-radius: 100%;
height: 40px;
width: 40px;
left: 25px;
& div{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;   
}
    & div > svg {
        cursor: pointer;
        fill: #ffff;
        height:100%;
        width:100%;
    }
    & div > div {
        position: absolute;
        top: -10px;
        border-radius: 100%;
        background: #ffffff;
        right: -16px;
        font-size: 13px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;        
    }
`
