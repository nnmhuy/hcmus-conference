import React from 'react'
import styled from 'styled-components'

const CenteredText = styled.div`
  text-align: center;
`

const Counter = styled.h3`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 3.2rem;
  }
`

const Title = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 400
`

const StatItem = (props) => {
  const {stat} = props
  return (
    <CenteredText>
      <Counter>{stat.count}</Counter>
      <Title>{stat.title}</Title>
    </CenteredText>
  )
}

export default StatItem