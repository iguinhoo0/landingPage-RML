/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react'
import Icon from '@mdi/react'
import { Container } from '../Mdicon/styles'

interface IPropsOptions {
  size?: number
  color?: string
  icon?: any
  onClick?: () => void
}

const MdIcon: React.FC<IPropsOptions> = ({ size, icon, color, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon path={icon} size={size} color={color} />
    </Container>
  )
}

export default MdIcon
