import React from 'react'
import styled from 'styled-components'

const TitleText = styled.div`
  position: absolute;
  width: max-content;
  text-align: center;
  font-size: 1rem;
  color: #4053EB;
  font-weight: 500;

  top: -120%;
  left: 50%;
  transform: translate(-50%,-50%);

  opacity: 0;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
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

const SubEventContainer = styled.div`
  position: relative;
  text-align: center;
  &:hover ${TitleText} {
    opacity: 1;
  }
`

const SubCircleStraight = styled.div`
  height: 7px;
  width: 7px;
  background-color: #4053EB;
  border-radius: 50%;
`

const SubEvent = (props) => {
  const { type, title, date, time } = props.sched
  return (
    <SubEventContainer>
      <TitleText>{title}</TitleText>
      <SubCircleStraight/>
      <TimeTextBelow>{time}</TimeTextBelow>
    </SubEventContainer>
  )
}

export default SubEvent