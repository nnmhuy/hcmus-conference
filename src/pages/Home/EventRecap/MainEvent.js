import React from 'react'
import styled from 'styled-components'

const MainCircleBordered = styled.div`
  width: 28px;
  height: 28px;
  background-color: #fff;
  border: 3px solid #4053EB;
  border-radius: 50%;
`

const RelativeContainer = styled.div`
  position: relative;
`

const TimeText = styled.h2`
  margin-bottom: 10px;
  line-height: 1.5rem;
  color: #7B7B7B;
  font-weight: 500;
  font-size: 1.5rem;
`

const DashedRoadPath = styled.div`
  width: 3px;
  height: 60px;
  background-image: linear-gradient(#CEE0F2 60%, rgba(255,255,255,0) 0%);
  background-position: right;
  background-size: 3px 20px;
  background-repeat: repeat-y;
`

const MainEventContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  transform: translate(50%, -25%);
  
  &:before {
    content:"";
    position: absolute;
    border-style: solid;
    border-width: 20px 25px 20px 0px;
    border-color: transparent #4053EB transparent transparent;
    left: -25px;
  }
`

const ParaDesc = styled.p`
  position: absolute;
  right: calc(-100% - 150px - 17px);
  width: 150px;
  top: 40px;
  line-height: 1.2rem;
`

const DateText = styled.h3`
  font-weight: 600;
  position: absolute;
  font-size: 1.2rem;
  color: #4053EB;
  top: 45%;
  left: -100%;
  transform: translate(-100%, -50%);
`

const MainEvent = (props) => {
  const {date, title, desc, time} = props.eventRec
  const {final} = props
  return (
    <MainEventContainer>
      <RelativeContainer>
        <DateText>{date}</DateText>
        <MainCircleBordered/>
        <div>
          <RightAngleBox>{title}</RightAngleBox>
          <ParaDesc>{desc}</ParaDesc>
        </div>
      </RelativeContainer>
      <TimeText>{time}</TimeText>
      { !final ? <DashedRoadPath/> : <></> }
    </MainEventContainer>
  )
}

export default MainEvent