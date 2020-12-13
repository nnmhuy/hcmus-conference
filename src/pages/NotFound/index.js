import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import BookBubble from '../../static/images/book-bubble2@2x.png'
import './style.css'

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
  animation: fromTop 6s ease-in-out infinite;
  // animation: animation: fromTop 6s ease-in-out infinite; 6s ease-in-out infinite;
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

export default function NotFound() {
  return (
    <NotFoundContainer>
      <SelfContainer>
        <BlobShape></BlobShape>
        <BookBubbleImg src={BookBubble}/>
        <NotFoundText>404</NotFoundText>
        <NavLink to='/'>Về trang chủ</NavLink>
      </SelfContainer>
    </NotFoundContainer>
  )
}
