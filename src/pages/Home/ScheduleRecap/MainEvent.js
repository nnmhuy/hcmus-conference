import React from 'react'
import styled from 'styled-components'

import { getDayMonthFromTime, getHourMinuteFromTime } from '../../../helpers/timeConverter'

const TitleText = styled.div`
  position: absolute;
  width: max-content;
  text-align: center;
  font-size: 1rem;
  color: #4053EB;
  font-weight: 500;

  top: -150%;
  left: 50%;
  transform: translate(-50%,-50%);

  opacity: 0;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 0;
    transform: translate(-50%, 50%);
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #4053EB;
  }
`

const TimeTextBelow = styled.div`
  position: absolute;
  color: #7B7B7B;
  font-size: 0.8rem;
  font-weight: 400;
  left: 50%;
  transform: translateX(-50%);
`

const DateText = styled.p`
  position: absolute;
  width: max-content;
  font-size: 1.2rem;
  color: #4053EB;
  font-weight: 500;

  top: -110%;
  left: 50%;
  transform: translate(-50%,-50%);
  
  opacity: 1;
  transition: all 0.4s;
`

const MainEventContainer = styled.div`
  position: relative;
  text-align: center;
  &:hover ${TitleText} {
    opacity: 1;
  }
  &:hover ${DateText} {
    opacity: 0;
  }
`

const MainCircleStraight = styled.div`
  height: 20px;
  width: 20px;
  border: 3px solid #4053EB;
  background-color: #fff;
  transform: translateY(-7px);
  border-radius: 50%;
  
`

function MainEvent(props) {
  const { title, time } = props.sched
  return (
    <MainEventContainer>
      <DateText>{getDayMonthFromTime(time)}</DateText>
      <TitleText>{title}</TitleText>
      <MainCircleStraight/>
      <TimeTextBelow>{getHourMinuteFromTime(time)}</TimeTextBelow>
    </MainEventContainer>
  )
}

export default MainEvent