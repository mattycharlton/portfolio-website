import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.a`
  margin: 10px;
  cursor: pointer;

  svg {
    transition: color 0.5s ease;
    color: #fff;
    &:hover {
      color: #e50023;
    }
  }
`
