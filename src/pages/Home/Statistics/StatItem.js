import React from 'react'
import styled from 'styled-components'
// import Ticker from './Ticker'

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
const Ticker = styled.h3`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 3.2rem;
  }
`

function StatItem(props) {
  const { count, label } = props
  return (
    <CenteredText>
       {/* <Counter ref={countUpRef}/> */}
      <Ticker>{count}</Ticker>
      <Title>{label}</Title>
    </CenteredText>
  )
}

export default StatItem