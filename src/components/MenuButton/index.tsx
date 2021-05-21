import { SMenuButton, SMenuButtonLine } from './styled'
import { IButton } from '../../core/types/components'

const MenuButton: React.FC<IButton> = ({ clickHandler }) => (
  <SMenuButton onClick={clickHandler}>
    <SMenuButtonLine />
    <SMenuButtonLine />
    <SMenuButtonLine />
  </SMenuButton>
)

export default MenuButton
