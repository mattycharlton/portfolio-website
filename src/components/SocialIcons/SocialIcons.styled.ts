import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.md} {
    justify-content: left;
  }
`
