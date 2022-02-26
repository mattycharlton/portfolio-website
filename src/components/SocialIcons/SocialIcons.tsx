import React from 'react'
import {
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { Container } from './SocialIcons.styled'
import Icon from '../Icon'

const SocialIcons = () => (
  <Container>
    <Icon href="https://www.linkedin.com/in/mattycharlton/" icon={faLinkedin} size="3x"  />
    <Icon href="https://twitter.com/mattycharlton_/" icon={faTwitter} size="3x"  />
    <Icon href="https://github.com/mattycharlton/" icon={faGithub} size="3x"  />
    <Icon href="https://stackoverflow.com/users/12885512/matthew" icon={faStackOverflow} size="3x"  />
  </Container>
)

export default SocialIcons
