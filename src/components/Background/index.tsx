import SBackground from './styled'

import { TBackground } from '../../core/types/components'
import { backgroundTransparency } from '../../styles/vars'

const Background: React.FC<TBackground> = ({
  autoplay = true,
  loop = true,
  muted = true,
  opacity,
}) => (
  <SBackground transparency={opacity ?? backgroundTransparency}>
    <video autoPlay={autoplay} loop={loop} muted={muted}>
      <source src="media/background.mp4" type="video/mp4" />
    </video>
  </SBackground>
)

export default Background
