import React from 'react'
import styled from 'styled-components'

import colors from '../../../constants/colors'
import { getDayMonthFromTime, getHourMinuteFromTime } from '../../../helpers/timeConverter'

const TitleText = styled.div`
  position: absolute;
  width: max-content;
  text-align: center;
  font-size: 1rem;
  color: ${colors.primaryOrange};
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
    border-top: 6px solid ${colors.primaryOrange};
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
  color: ${colors.primaryOrange};
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
    opacity: ${props => !props.title ? 0 : 1};
  }
  &:hover ${DateText} {
    opacity: ${props => !props.title ? 1 : 0};
  }
`

const MainCircleStraight = styled.div`
  height: 20px;
  width: 20px;
  border: 3px solid ${colors.primaryOrange};
  background-color: #fff;
  transform: translateY(-7px);
  border-radius: 50%;
  
`

function MainEvent(props) {
  const { title, time } = props.sched
  return (
    <MainEventContainer title={title}>
      
      <DateText>{getDayMonthFromTime(time)}</DateText>
      {
        !title ? <></> : <TitleText>{title}</TitleText>
      }
      
      <MainCircleStraight/>
      {
        !title ? <></> : <TimeTextBelow>{getHourMinuteFromTime(time)}</TimeTextBelow>
      }
    </MainEventContainer>
  )
}

export default MainEvent