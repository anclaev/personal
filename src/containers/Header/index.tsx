import S from './styled'

import Logo from '../../components/Logo'
import MenuButton from '../../components/MenuButton'

const menuButtonClickHandler = () => alert('hi!')

const Header: React.FC = () => (
  <S>
    <Logo />
    <MenuButton clickHandler={menuButtonClickHandler} />
  </S>
)

export default Header
