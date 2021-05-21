import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { EFamily } from '../core/types/fonts'
import { font, themeColor } from './vars'
import fontFaces from './fonts'

export const Root = createGlobalStyle`
    ${normalize}
    ${fontFaces}

    html {
        background: ${themeColor};
        color: #fff;
        ${font(EFamily.robotoMono, 24)}
    }
`
