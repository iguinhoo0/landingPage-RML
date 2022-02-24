import React, { useState } from 'react'
import { Container, StyledInput } from './styles'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const [active, setActive] = useState<boolean>(false || !!props.value)
  return (
    <Container>
      <StyledInput
        active={active}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        {...props}
      />
    </Container>
  )
}
