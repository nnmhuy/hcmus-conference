import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import BookBubble from '../../static/images/book-bubble2@2x.png'

const NotFoundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  @media (min-width: 600px) {
    min-height: 700px;
  }
`

const BlobShape = styled.div`
  background: #aad7d0;
  position: relative;
  z-index: 10;
  transition: transform 0.8s ease;
  
  height: calc(100vh/2);
  width: calc(100% - 60px);
  max-height: 350px;

  top: 50%;
  transform: translate3d(30px, 0, 0);
  animation: blobRadius 6s ease-in-out infinite;

  height: calc(100vh/2);
  width: calc(100% - 60px);

  @media (min-width: 600px) {
    left: 50%;
    top: 250px;
    width: 500px;
    max-height: unset;
    height: 500px;
    transform: translate3d(-50%, -50%, 0);
  }
`

const BookBubbleImg = styled.img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -40%, 0);
  z-index: 20;
  width: 100%;
  @media (min-width: 600px) {
    width: 600px;
  }
`

const SelfContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const NotFoundText = styled.h1`
  position: absolute;
  width: max-content;
  font-size: 9rem;
  font-weight: 700;
  color: #fff2e1;
  position: absolute;
  transform: rotate(28deg);
  z-index: 10;
  right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 400px) { 
    font-size: 15rem;
  }
`

const ButtonWhite = styled.button`
  overflow: hidden;
  background-color: #4053EB;
  border-radius: 100px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  position: absolute;
  bottom: -100px;
  z-index: 80;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
  outline: none;
  border: none;

  
  color: white;
  
  @media (min-width: 900px) {
    font-size: 1rem;
  }
  @media (min-width: 1020px) {
    font-size: 1.2rem;
  }
`

const BlobShapeMini = styled.div`
  width: 40px;
  height: 40px;
  // background: #ffa638;
  // background: #aad7d0;
  background: #ffb647;
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
  pointer-events: none;
`

export default function NotFound() {

  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    scale: "scale(0)"
  })

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

  return (
    <NotFoundContainer>
      <SelfContainer>
        <BlobShape></BlobShape>
        <BookBubbleImg src={BookBubble}/>
        <NotFoundText>404</NotFoundText>
        <NavLink to="/">
          <ButtonWhite
            onMouseMove={listenMouseEvent}
            onMouseLeave={listenMouseLeaveEvent}
          >
            <BlobShapeMini pos={pos}></BlobShapeMini>
            <ParaText>VỀ TRANG CHỦ</ParaText>
          </ButtonWhite>
        </NavLink>
      </SelfContainer>
    </NotFoundContainer>
  )
}
