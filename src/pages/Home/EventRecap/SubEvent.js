import React from 'react'
import styled from 'styled-components'

const MainCircleBordered = styled.div`
  width: 16px;
  height: 16px;
  background-color: #4053EB;
  border-radius: 50%;
`

const RelativeContainer = styled.div`
  position: relative;
`

const TimeText = styled.h2`
  margin-bottom: 10px;
  line-height: 1.5rem;
  color: #77787c;
  font-weight: 400;
  font-size: 1.2rem;
`

const DashedRoadPath = styled.div`
  width: 3px;
  height: 60px;
  background-image: linear-gradient(#CEE0F2 60%, rgba(255,255,255,0) 0%);
  background-position: right;
  background-size: 3px 20px;
  background-repeat: repeat-y;
`

const SubEventContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`

const RightAngleBox = styled.div`
  background-color: #4053EB;
  min-width: 150px;
  height: 40px;

  text-align: center;
  color: white;
  font-weight: 600;
  line-height: 35px;
  font-size: 1.2rem;

  position: absolute;
  top: 0;
  transform: translate(-200px, -12px);
  
  &:before {
    content:"";
    position: absolute;
    border-style: solid;
    border-width: 20px 0 20px 25px;
    border-color: transparent transparent transparent #4053EB;
    right: -25px;
  }
`

const ParaDesc = styled.p`
  position: absolute;
  right: calc(100% + 150px + -100px);
  text-align: right;
  width: 150px;
  top: 35px;
  line-height: 1.4rem;
`

const SubEvent = (props) => {
  const {title, desc, time} = props.eventRec
  return (
    <SubEventContainer>
      <RelativeContainer>
        <div>
          <RightAngleBox>{title}</RightAngleBox>
          <ParaDesc>{desc}</ParaDesc>
        </div>
        <MainCircleBordered/>
      </RelativeContainer>
      <TimeText>{time}</TimeText>
      <DashedRoadPath/>
    </SubEventContainer>
  )
}

export default SubEvent