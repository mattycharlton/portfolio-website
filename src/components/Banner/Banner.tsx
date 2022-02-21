import React, { Fragment } from 'react'
import Social from '../SocialIcons/SocialIcons'
import logo from '../../images/tertiary-logo.png'
import {
  BannerWrapper,
  Container,
  Heading,
  SubHeading,
  Logo,
} from './Banner.styled'

const Banner = () => (
  <BannerWrapper>
    <Container>
      <Logo src={logo}></Logo>
      <Heading>Matty Charlton</Heading>
      <SubHeading>Front End Engineer</SubHeading>
      <Social />
    </Container>
  </BannerWrapper>
)

export default Banner
