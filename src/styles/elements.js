import styled from 'styled-components'
import {screens} from './settings'

export const AppWrapper = styled.div`
  font-size: 2rem;
`

export const MainWrapper = styled.div`
  border-radius: 1rem;
  background-color: #f4f6f9;
  width: 80%;
  @media (min-width: ${screens.lg}) {
    width: 40%;
  }
  margin: 0 auto;
`
