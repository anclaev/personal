import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { themeColor } from './vars'

export const Root = createGlobalStyle`
    ${normalize}

    html {
        background: ${themeColor};
        color: #fff;
    }
`
