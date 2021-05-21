import styled from 'styled-components'

const SButton = styled.button`
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
`

const Button: React.FC = ({ children }) => <SButton>{children}</SButton>

export default Button
