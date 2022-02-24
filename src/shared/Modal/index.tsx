import React from 'react'
import { Container, ModalContainer, StyledIcon, IconContainer } from './styles'
import { mdiClose } from '@mdi/js'

interface IModal {
  isOpen: boolean
  height?: string
  view?: boolean
  onClose?: () => void
}

export const Modal: React.FC<IModal> = ({
  isOpen,
  children,
  height,
  view,
  onClose
}) => {
  return (
    <Container isOpen={isOpen}>
      <ModalContainer height={height}>
        <IconContainer view={view} color="#fff">
          <StyledIcon
            size={1.5}
            color="#6a16ad"
            icon={mdiClose}
            onClick={onClose}
          />
        </IconContainer>
        {children}
      </ModalContainer>
    </Container>
  )
}
