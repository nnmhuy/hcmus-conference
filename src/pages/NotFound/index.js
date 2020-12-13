import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import BookBubble from '../../static/images/book-bubble2@2x.png'

const NotFoundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
`

const BlobShape = styled.div`
  width: 500px;
  height: 500px;
  
  background: #aad7d0;
  position: relative;
  z-index: 10;
  transition: transform 0.8s ease;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  animation: blobRadius 6s ease-in-out infinite;
`

const BookBubbleImg = styled.img`
  position: absolute;
  width: 600px;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -40%, 0);
  z-index: 20;
`

const SelfContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const NotFoundText = styled.h1`
  position: absolute;
  width: max-content;
  font-size: 15rem;
  font-weight: 700;
  color: #fff2e1;
  position: absolute;
  transform: rotate(28deg);
  z-index: 10;
  right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ButtonWhite = styled.button`
  overflow: hidden;
  background-color: #4053EB;
  border-radius: 100px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
  position: absolute;
  bottom: 20px;
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

export default function NotFound() {
  return (
    <NotFoundContainer>
      <SelfContainer>
        <BlobShape></BlobShape>
        <BookBubbleImg src={BookBubble}/>
        <NotFoundText>404</NotFoundText>
        <NavLink to="/">
          <ButtonWhite>
            VỀ TRANG CHỦ
          </ButtonWhite>
        </NavLink>
      </SelfContainer>
    </NotFoundContainer>
  )
}
