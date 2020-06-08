import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
    from{
        filter:blur(5px);
        opacity:0;
    }
    to{
        filter:blur(0);
        opacity:1;
    }
`

const introTop = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    transform:scale(.6);
  }
`

export const fadeIn = ({ time = '1s', type = 'cubic-bezier(0.645, 0.045, 0.355, 1)' } = {}) => css`
animation:${time} ${fadeInKeyFrames} ${type};
`
export const introTopBlur = ({ time = '0.6s', type = 'cubic-bezier(0.230, 1.000, 0.320, 1.000)' } = {}) => css`
animation:${time} ${introTop} ${type};
`
