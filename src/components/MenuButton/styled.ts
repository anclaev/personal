import styled from 'styled-components'

import { SButton } from '../../styles/ui'

export const SMenuButton = styled(SButton)`
  & > span:nth-child(2) {
    margin: 7px 0;
  }
`

export const SMenuButtonLine = styled.span`
  display: block;
  width: 50px;
  height: 1px;
  background-color: #fff;
`
