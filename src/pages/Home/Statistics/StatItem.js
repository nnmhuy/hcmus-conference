import React from 'react'
import styled from 'styled-components'
import Ticker from './Ticker'

const CenteredText = styled.div`
  text-align: center;
  width: 35vw;
  @media (min-width: 800px) {
    width: 15vw;
  }
  @media (min-width: 900px) {
    width: 12vw;
  }
  @media (min-width: 1286px) {
    width: 200px;
  }
`

const Title = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
`

const StatItem = (props) => {
  const { count, label } = props
  return (
    <CenteredText>
      <Ticker end={count} />
      <Title>{label}</Title>
    </CenteredText>
  )
}

export default StatItem