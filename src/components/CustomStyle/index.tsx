import styled from 'styled-components'

import { ICustomStyle } from '../../core/types/components'

const CustomStyle: React.FC<ICustomStyle> = ({ child, css }) => {
  let Component = styled(child)`
    ${css}
  `
  return <Component />
}

export default CustomStyle
