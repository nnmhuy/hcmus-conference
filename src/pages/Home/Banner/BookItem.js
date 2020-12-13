import React from 'react'
import styled from 'styled-components'
import SuspenseImage from '../../../components/SuspenseImage'

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
    min-width: 70px;
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
`

const BookHolder = styled.a`
  transition: all 0.4s;
  cursor: pointer;
  position: relative;
  width: 50px;
  display: inline-block;
  pointer-events: auto;
  transform: ${props => props.translateResize};
  &:hover ${ImageBook} {
    transform: translateY(-15px);
  }
  &:hover ${BookShadow} {
    opacity: 0;
  }
  @media (min-width: 1020px) {
    width: 70px;
    transform: ${props => props.translate};
    &:hover ${ImageBook} {
      transform: translateY(-20px);
    }
  }
`


export default function BookItem(props) {
  const { courseIndex, course, setHoverText, translateResize } = props
  const { alt, name, image, translate } = course

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
    <BookHolder translateResize={translateResize} translate={translate}
      onMouseOver={() => setHoverText(name, true)}
      onMouseLeave={() => setHoverText(name, false)}
      href={`/chuong-trinh?${query.toString()}`}
    >
      <BookShadow src={bookShadow} alt="book shadow" />
      {getImgResource()}
    </BookHolder>
  )
}