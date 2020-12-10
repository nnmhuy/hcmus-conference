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
      <Counter>{count}</Counter>
      {renderName(id)}
    </CenteredText>
  )
}

export default StatItem