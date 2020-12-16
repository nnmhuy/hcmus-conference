import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SuspenseImage from '../../../components/SuspenseImage'
import colors from '../../../constants/colors'
import bookShadow from '../../../static/images/ke-sach/shadow.png'
import tieuBan1 from '../../../static/images/sach-tieu-ban/tieu-ban-1.png'
import tieuBan2 from '../../../static/images/sach-tieu-ban/tieu-ban-2.png'
import tieuBan3 from '../../../static/images/sach-tieu-ban/tieu-ban-3.png'
import tieuBan4 from '../../../static/images/sach-tieu-ban/tieu-ban-4.png'
import tieuBan5 from '../../../static/images/sach-tieu-ban/tieu-ban-5.png'
import tieuBan6 from '../../../static/images/sach-tieu-ban/tieu-ban-6.png'
import tieuBan7 from '../../../static/images/sach-tieu-ban/tieu-ban-7.png'
import tieuBan8 from '../../../static/images/sach-tieu-ban/tieu-ban-8.png'
import tieuBan9 from '../../../static/images/sach-tieu-ban/tieu-ban-9.png'
import tieuBan10 from '../../../static/images/sach-tieu-ban/tieu-ban-10.png'

const ImageBook = styled(SuspenseImage)`
  transition: all 0.4s;
  cursor: pointer;
  width: 100%;
  min-width: 50px;
  display: block;
  position: absolute;
  animation: float-bubble 1.8s;
  @media (min-width: 1020px) {
    min-width: 5rem;
  }
  @media (min-width: 2000px) {
    min-width: 6rem;
  }
`

const BookShadow = styled.img`
  transition: all 0.4s;
  opacity: 1;
  width: 100%;
  display: block;
  bottom: 0;
  transform: translate(8px, 64px);
  @media (min-width: 1020px) {
    transform: translate(10px, 90px);
  }
  @media (min-width: 1286px) {
    transform: translate(17px, 104px);
  }
  @media (min-width: 2000px) {
    transform: translate(18px,125px);
  }
`

const BookHolder = styled.a`
  transition: all 0.4s;
  cursor: pointer;
  position: relative;
  width: 50px;
  display: inline-block;
  pointer-events: auto;
  
  &:hover ${ImageBook} {
    transform: translateY(-15px);
  }
  &:hover ${BookShadow} {
    opacity: 0;
  }
  @media (min-width: 1020px) {
    width: 5rem;
    transform: ${props => props.translateResize[1]};
    &:hover ${ImageBook} {
      transform: translateY(-20px);
    }
  }
  @media (min-width: 1286px) {
    //translate(xx, yy)
    //translateY(-20px)
    transform: ${props => props.translateResize[2]} ${props => props.random ? `translateY(-20px)` : ``}    ;
  }
    &:hover ${ImageBook} {
      transform: translateY(-20px);
    }
  }
  @media (min-width: 2000px) {
    width: 6rem;
    transform: ${props => props.translateResize[3]};
    &:hover ${ImageBook} {
      transform: translateY(-20px);
    }
  }
`

const CursorDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 8px;
  height: 8px;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: ${colors.primaryOrange};
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
  }
  }
`


export default function BookItem(props) {
  const { courseIndex, course, setHoverText, translateResize } = props
  const { alt, name, image } = course
  
  const getImgResource = () => {
    let srcImage = null
    if (image) {
      switch (image) {
        case 1: 
          srcImage = tieuBan1
          break
        case 2: 
          srcImage = tieuBan2
          break
        case 3: 
          srcImage = tieuBan3
          break
        case 4: 
          srcImage = tieuBan4
          break
        case 5: 
          srcImage = tieuBan5
          break
        case 6: 
          srcImage = tieuBan6
          break
        case 7: 
          srcImage = tieuBan7
          break
        case 8: 
          srcImage = tieuBan8
          break
        case 9: 
          srcImage = tieuBan9
          break
        case 10:
          srcImage = tieuBan10
          break
        default:
          srcImage = tieuBan1
          break
      }
      return <ImageBook src={srcImage} alt={alt} />
    }
  }

  const query = new URLSearchParams()
  query.set('filter', JSON.stringify([courseIndex]))

  return (
    <BookHolder 
      translateResize={translateResize}
      onMouseOver={() => setHoverText(name, true)}
      onMouseLeave={() => setHoverText(name, false)}
      href={`/chuong-trinh?${query.toString()}`}
    >
      <BookShadow src={bookShadow} alt="book shadow" />
      {/* <button onClick={setBookFocus}>clickme me</button> */}
      {getImgResource()}
    </BookHolder>
  )
}