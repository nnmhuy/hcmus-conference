import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const BorderedContainer = styled.fieldset`
  width: fit-content;
  transform: translateY(-30%);
  position: relative;
  border: 1px solid #B1CCE6;

  padding: 10px 20px 10px 20px;

  @media (min-width: 800px) {
    padding: 10px 20px 25px 20px;
  }
`

const TimerContainer = styled.legend`
  display: flex;
  margin: 0;
  width: fit-content;
  justify-content: center;
  background: transparent;
  text-align: center;
  padding: 0 10px;
  color: #fff;
`

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  float: left;
`

const TimerNumber = styled.h3`
  font-weight: 600;
  margin-bottom: 0;
  font-size: 2rem;
  width: 2.5rem;
  line-height: 2.5rem;
  color: #fff;
  position: relative;
  @media (min-width: 900px) {
    font-size: 3rem;
    width: 3.5rem;
  }
`

const TimerText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`

const EventName = styled.h1`
  font-weight: 700;
  color: #FFF;
  font-size: 2.3rem;
  text-align: center;
  font-size: 1.7rem;
  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1020px) {
    font-size: 2rem;
  }
  @media (min-width: 1120px) {
    font-size: 2.3rem;
  }
`

const ButtonWhite = styled.button`
  color: #B1CCE6;
  overflow: hidden;
  background-color: #FFF;
  border-radius: 100px;
  padding: 8px 15px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  cursor: pointer;
  outline: none;
  border: none;

  
  color: #4053EB;
  
  @media (min-width: 900px) {
    font-size: 1rem;
  }
  @media (min-width: 1020px) {
    font-size: 1.2rem;
  }
`

const ClearFloat = styled.div`
  clear: both;
`

const BlobShape = styled.div`
  width: 40px;
  height: 40px;
  // background: #ffa638;
  background: #aad7d0;
  position: absolute;
  pointer-events: none;
  z-index: 1;
  transform: ${props => props.pos.scale} translateZ(0);
  transition: transform 0.3s ease;
  animation: blobRadius 6s ease-in-out infinite;
  top: ${props => props.pos.top};
  left: ${props => props.pos.left};
`

const ParaText = styled.span`
  margin: 0;
  position: relative;
  z-index: 3;
  font-weight: 600;
  text-transform: uppercase;
  pointer-events: none;
`

function BrandName(props) {
  const [timeState, setTime] = useState({
    day: 1,
    hour: 1,
    minute: 1,
    second: 1
  })

  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    scale: "scale(0)"
  })

  useEffect(()=>{
    function getDiffInDate() {
      const endDate = new Date("2020-12-18T00:00:00.000+07:00")
      const currentDate = new Date()

      const diff = endDate - currentDate
      if (diff === 0) return

      const day = parseInt(diff / (1000 * 60 * 60 * 24))
      const hour = parseInt(Math.abs(diff) / (1000 * 60 * 60) % 24)
      const minute = parseInt(Math.abs(diff) / (1000 * 60) % 60)
      const second = parseInt(Math.abs(diff) / (1000) % 60)

      setTime({
        day,
        hour,
        minute,
        second
      })
    }
    getDiffInDate();

    const timer = setInterval(function() { getDiffInDate() }, 1000)
    return function() {
      clearInterval(timer)
    }
  }, [])

  const listenMouseEvent = e => {
    const rect = e.target.getBoundingClientRect();
    
    const X = e.clientX - rect.left;
    const Y = e.clientY - rect.top;

    setPos({
      top: Y - 40 / 2 + "px",
      left: X - 40 / 2 + "px",
      scale: "scale(1)"
    })
  }

  const listenMouseLeaveEvent = e => {
    setPos({...pos, scale: "scale(0)"})
  }

  const switchPath = () => {
    props.history.push('/chuong-trinh')
  }

  return (
    <BorderedContainer>
      {
        timeState.day === 0 && 
        timeState.hour === 0 && 
        timeState.minute === 0 && 
        timeState.second === 0 ?
        <TimerContainer>
          <TimerText>Chào mừng tới</TimerText>
        </TimerContainer>
        :
        <TimerContainer>
          {
            timeState.day !== 0 ?
            <TimerItem>
              <TimerNumber>{timeState.day}</TimerNumber>
              <TimerText>ngày</TimerText>
            </TimerItem>
            :
            <></>
          }
          
          <TimerItem>
            <TimerNumber>{timeState.hour}</TimerNumber>
            <TimerText>giờ</TimerText>
          </TimerItem>
          <TimerItem>
            <TimerNumber>{timeState.minute}</TimerNumber>
            <TimerText>phút</TimerText>
          </TimerItem>
          <TimerItem>
            <TimerNumber>{timeState.second}</TimerNumber>
            <TimerText>giây</TimerText>
          </TimerItem>
          <ClearFloat/>
        </TimerContainer>
      }
      
      <EventName>
      HỘI NGHỊ KHOA HỌC
      <br/>LẦN THỨ XII - 2020
      </EventName>
      <ButtonWhite onClick={switchPath}
      onMouseMove={listenMouseEvent}
      onMouseLeave={listenMouseLeaveEvent}
      >
        <BlobShape pos={pos}></BlobShape>
        <ParaText>Xem lịch trình</ParaText>
      </ButtonWhite>
    </BorderedContainer>
  )
}

export default withRouter(BrandName)