import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { EFamily } from '../core/types/fonts'
import { font } from './functions'
import { themeColor } from './vars'

import fontFaces from './fonts'

export const SRoot = createGlobalStyle`
    ${normalize}
    ${fontFaces}

    html {
        background: ${themeColor};
        color: #fff;
        ${font(EFamily.robotoMono, 24)}
    }
`
