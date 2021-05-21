export interface IBackground {
  opacity?: string
  isPoster?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

export interface ILogo {
  fill?: string
}

export interface IButton {
  children?: React.ReactNode
  clickHandler?: () => void
}
