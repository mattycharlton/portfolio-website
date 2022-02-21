import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { Container, Icon } from './SocialIcons.styled'

const SocialIcons = () => (
  <Container>
    <Icon target="_blank" href="https://www.linkedin.com/in/mattycharlton/">
      <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </Icon>
    <Icon target="_blank" href="https://twitter.com/mattycharlton_/">
      <FontAwesomeIcon icon={faTwitter} size="3x" />
    </Icon>
    <Icon target="_blank" href="https://github.com/mattycharlton/">
      <FontAwesomeIcon icon={faGithub} size="3x" />
    </Icon>
    <Icon
      target="_blank"
      href="https://stackoverflow.com/users/12885512/matthew"
    >
      <FontAwesomeIcon icon={faStackOverflow} size="3x" />
    </Icon>
  </Container>
)

export default SocialIcons
