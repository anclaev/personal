import S from './styled'

import Logo from '../../components/Logo'
import Button from '../../components/ui/Button'

const Header: React.FC = () => (
  <S>
    <Logo />
    <Button>Button</Button>
    <div>Menu</div>
  </S>
)

export default Header
