import styled from 'styled-components'
import Background from '../../images/home-background.jpg'

export const BannerWrapper = styled.section`
  min-height: 100vh;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(42, 54, 91, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Background});
`

export const Container = styled.div`
  text-align: center;
`

export const Heading = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: 900;
  margin: 0;
`

export const SubHeading = styled.h2`
  display: inline-flex;
  font-size: 25px;
  font-weight: 100;
  text-align: center;
  padding: 10px;
`

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`
