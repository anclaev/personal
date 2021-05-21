import styled from 'styled-components'

interface Props {
  transparency: string
}

const S = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: -7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > video,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > video {
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    background: #000;
    opacity: ${(P: Props) => P.transparency};
    bottom: 0;
    right: 0;
  }

  @media (min-aspect-ratio: 16/9) {
    & > video {
      height: 300%;
      top: -100%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    & > video {
      width: 300%;
      left: -100%;
    }
  }

  @supports (object-fit: cover) {
    & > video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default S
