import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { themeColor } from './vars'
import fonts from './fonts'

export const Root = createGlobalStyle`
    ${normalize}
    ${fonts}
    html {
        background: ${themeColor};
        color: #fff;
        font-family: 'Roboto Mono';
        font-weight: normal;
    }
`
