import { css } from 'styled-components'
import { EFamily, EWeight } from '../core/types/fonts'

export const font = (family: EFamily, size?: number, weight?: EWeight) => css`
  font-family: ${family};
  font-size: ${size ? size + 'px' : 'inherit'};
  font-weight: ${weight ?? 'normal'};
`
