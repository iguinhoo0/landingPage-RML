import styled from 'styled-components'
import { Fade } from '../../styles/animations'

import MdIcon from '../../shared/Mdicon'

interface PropsStyles {
  isOpen?: boolean
  onClose?: boolean
  height?: string
}

interface ViewProps {
  view?: boolean
}

export const Container = styled.div<PropsStyles>`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  animation: ${Fade} 0.4s linear forwards;
`

export const ModalContainer = styled.div<PropsStyles>`
  width: 520px;
  height: ${(props) => props.height};
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #6a16ad;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const IconContainer = styled.div<ViewProps>`
  width: 100%;
  display: ${(props) => (props.view ? 'flex' : 'none')};
  justify-content: flex-end;
  padding: 0 50px;
`

export const StyledIcon = styled(MdIcon)`
  position: absolute;
  top: 0;
`
