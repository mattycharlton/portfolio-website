import styled from 'styled-components'
import Background from '../../images/home-background.jpg'
import breakpoints from '../../styles/breakpoints'

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
  text-align: center;

  @media ${breakpoints.md} {
    text-align: left;
  }
`

export const TwoColumn = styled.div`
  display: grid;
  max-width: 1000px;
  gap: 20px;
  margin: 0 20px;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1.5fr;
    margin: 0 auto;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${breakpoints.md} {
    justify-content: right;
    align-items: center;
  }
`

export const Image = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #2a365b;

  @media ${breakpoints.md} {
    width: 250px;
    height: 250px;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  border: 2px solid #e50023;
  background-color: #e50023;
  display: inline;
  color: #fff;

  @media ${breakpoints.md} {
    font-size: 50px;
  }
`

export const SubHeading = styled.h2`
  display: inline-flex;
  font-size: 20px;
  font-weight: 100;

  @media ${breakpoints.md} {
    font-size: 25px;
  }
`
