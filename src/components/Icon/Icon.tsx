import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconWrapper } from './Icon.styled'
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
  href: string
  icon: IconDefinition
  size: SizeProp
  target?: React.HTMLAttributeAnchorTarget
}

const Icon = ({ href, icon, size, target = '_blank' }: Props) => (
  <IconWrapper target={target} href={href}>
    <FontAwesomeIcon icon={icon} size={size} />
  </IconWrapper>
)

export default Icon
