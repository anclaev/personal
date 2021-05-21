import { FlattenSimpleInterpolation } from 'styled-components'

export interface IBackground {
  opacity?: string
  isPoster?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

export interface ICustomStyle {
  child: React.FC
  css: FlattenSimpleInterpolation
}
