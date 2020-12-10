import React from 'react'
import styled from 'styled-components'

const MainEventContainer = styled.div`
  position: relative;
  text-align: center;
`

const MainCircleStraight = styled.div`
  height: 20px;
  width: 20px;
  border: 3px solid #4053EB;
  background-color: #fff;
  transform: translateY(-7px);
  border-radius: 50%;
`

const TimeTextBelow = styled.div`
  position: absolute;
  color: #7B7B7B;
  font-size: 0.8rem;
  font-weight: 400;
  left: 50%;
  transform: translateX(-50%);
`

const TitleText = styled.div`
  position: absolute;
  width: max-content;
  text-align: center;
  font-size: 1rem;
  color: #4053EB;
  font-weight: 500;
  &::after {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #e8e8e8;
  }
`


const MainEvent = (props) => {
  const { type, title, date, time } = props.sched
  return (
    <MainEventContainer>
      <TitleText>{title}</TitleText>
      <MainCircleStraight/>
      <TimeTextBelow>{time}</TimeTextBelow>
    </MainEventContainer>
  )
}

export default MainEvent