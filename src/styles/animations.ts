import { keyframes } from 'styled-components'

export const Fade = keyframes`
    0% {
        opacity: 0;
        filter: blur(10px);
    }

    100% {
        opacity: 1;
        filter: blur(0px);
    }
`

export const RightOut = keyframes`
  0%{
    opacity: 1;
        transform: translateX(0px)
        
    }

    30%{
        opacity: 0.7;
        transform: translateX(-20px);
        
    }

    60%{
        opacity: 0.4;
        transform: translateX(100px);
    }

    100%{
        opacity: 0;
        transform: translateX(300px);
    }
`

export const Right = keyframes`
    0%{
        opacity: 0;
        transform: translateX(300px);
    }

    30%{
        opacity: 0.4;
        transform: translateX(100px);
    }

    60%{
        opacity: 0.7;
        transform: translateX(-20px);
    }

    100%{
        opacity: 1;
        transform: translateX(0px)
    }
`
