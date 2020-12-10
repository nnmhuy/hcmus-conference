import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const BorderedContainer = styled.fieldset`
  width: fit-content;
  transform: translateY(-30%);
  position: relative;
  border: 1px solid #B1CCE6;
  padding: 10px 20px 25px 20px;
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
`

const TimerNumber = styled.h3`
  font-weight: 600;
  margin-bottom: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #fff;
  @media (min-width: 900px) {
    font-size: 3rem;
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

const BrandName = (props) => {
  return (
    <BorderedContainer>
      <TimerContainer>
        <TimerItem>
          <TimerNumber>1</TimerNumber>
          <TimerText>ngày</TimerText>
        </TimerItem>
        <TimerItem>
          <TimerNumber>18</TimerNumber>
          <TimerText>giờ</TimerText>
        </TimerItem>
        <TimerItem>
          <TimerNumber>1</TimerNumber>
          <TimerText>phút</TimerText>
        </TimerItem>
        <TimerItem>
          <TimerNumber>59</TimerNumber>
          <TimerText>giây</TimerText>
        </TimerItem>
      </TimerContainer>
      <EventName>
      HỘI NGHỊ KHOA HỌC
      <br/>LẦN THỨ XII - 2020
      </EventName>
      <ButtonWhite onClick={()=>{
        props.history.push('/chuong-trinh')
      }}>
          Xem lịch trình
      </ButtonWhite>
    </BorderedContainer>
  )
}

export default withRouter(BrandName)