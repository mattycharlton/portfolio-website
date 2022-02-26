import React from 'react'
import SocialIcons from '../../components/SocialIcons'
import Picture from '../../images/profile-pic.png'
import {
  BannerWrapper,
  Container,
  Heading,
  SubHeading,
  Image,
  ImageWrapper,
  TwoColumn,
} from './Banner.styled'

const Banner = () => (
  <BannerWrapper>
    <TwoColumn>
      <ImageWrapper>
        <Image src={Picture} />
      </ImageWrapper>
      <Container>
        <Heading>Hey, I'm Matty</Heading>
        <SubHeading>
          Front End Engineer with over 4 years experience building digital
          products using the latest technologies.
        </SubHeading>
        <SocialIcons />
      </Container>
    </TwoColumn>
  </BannerWrapper>
)

export default Banner
