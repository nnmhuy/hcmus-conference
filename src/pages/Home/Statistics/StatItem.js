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
  font-weight: 400
`

const statNameList = [
  "ngành",
  "bài báo",
  "tác giả",
  "lượt tham gia"
]

const StatItem = (props) => {
  const { count, id } = props.stat
  const renderName = (id) => {
    return <Title>{statNameList[id]}</Title>
  }

  return (
    <CenteredText>
      <Ticker end={count}/>
      {renderName(id)}
    </CenteredText>
  )
}

export default StatItem