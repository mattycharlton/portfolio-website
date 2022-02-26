import styled from 'styled-components'
import Background from '../../images/home-background.jpg'

export const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(42, 54, 91, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Background});
  scroll-snap-align: center;
`

export const Container = styled.div`
  text-align: left;
`

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  max-width: 1000px;
  gap: 20px;
  margin: 0 auto;
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

export const Image = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid #2a365b;
`

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 900;
  margin: 0;
  border: 2px solid #e50023;
  background-color: #e50023;
  display: inline-block;
  color: #fff;
`

export const SubHeading = styled.h2`
  display: inline-flex;
  font-size: 25px;
  font-weight: 100;
`
