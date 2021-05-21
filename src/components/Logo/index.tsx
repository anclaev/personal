import styled from 'styled-components'

import { ReactComponent as SVG } from '../../assets/logo.svg'
import { ILogo } from '../../core/types/components'

const SLogo = styled(SVG)`
  & path {
    fill: ${(P: ILogo) => P.fill};
  }
`

const Logo: React.FC<ILogo> = ({ fill = '#fff' }) => <SLogo fill={fill} />

export default Logo
