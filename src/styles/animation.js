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

export const fadeIn = ({ time = '1s', type = 'cubic-bezier(0.645, 0.045, 0.355, 1)' } = {}) => css`
animation:${time} ${fadeInKeyFrames} ${type};
`
