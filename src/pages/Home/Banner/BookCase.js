import React, {useState} from 'react'
import styled from 'styled-components'

import BookItem from './BookItem'
import bookBubble from '../../../static/images/book-bubble2@2x.png'

const bookCaseData = {
  0: [
    {
      name: 'Hoá học',
      alt: 'hoa hoc',
      image: 3,
      translate: 'translate(-20px, -20px)'
    },
    {
      name: 'Sinh học\n- Công nghệ sinh học',
      alt: 'sinh hoc-cong nghe sinh hoc',
      image: 4,
      translate: 'translate(-30px, 10px)'
    },
    {
      name: 'Kỹ thuật hạt nhân\nvà vật lý y khoa',
      alt: 'ky thuat hat nhan va vat ly y khoa',
      image: 10,
      translate: 'translate(-28px, 45px)'
    },
    {
      name: 'Vật lý-địa cầu\nvà hải dương',
      alt: 'vat ly-dia cau va hai duong',
      image: 5,
      translate: 'translate(-28px, 80px)'
    }
  ],
  1: [
    {
      name: 'Địa chất và \ntài nguyên Trái đất',
      alt: 'dia chat va tai nguyen trai dat',
      image: 2,
      translate: 'translate(-20px, -22px)'
    },
    {
      name: 'Khoa học và\nCông nghệ Vật liệu',
      alt: 'khoa hoc va cong nghe vat lieu',
      image: 9,
      translate: 'translate(-28px, 10px)'
    },
    {
      name: 'Môi trường',
      alt: 'moi truong',
      image: 6,
      translate: 'translate(-28px, 46px)'
    }
  ],
  2: [
    {
      name: 'Điện tử - Viễn Thông',
      alt: 'dien tu-vien thong',
      image: 8,
      translate: 'translate(-25px, -25px)'
    },
    {
      name: 'Toán - Tin học',
      alt: 'toan-tin hoc',
      image: 1,
      translate: 'translate(-28px, 11px)'
    },
    {
      name: `Công nghệ thông tin\n- Truyền thông`,
      alt: 'cntt-truyen thong',
      image: 7,
      translate: 'translate(-30px, 45px)'
    }
  ]
}

const translateResize = [
  // 'translate(-20px, -20px)',
  // 'translate(-30px, 10px)',
  // 'translate(-28px, 45px)',
  // 'translate(-28px, 80px)',
  // 'translate(-20px, -22px)',
  // 'translate(-28px, 10px)',
  // 'translate(-28px, 46px)',
  // 'translate(-25px, -25px)',
  // 'translate(-28px, 11px)',
  // 'translate(-30px, 45px)'
  'translate(-20px, -20px)',
  'translate(-20px, 5px)',
  'translate(-22px, 28px)',
  'translate(-24px, 53px)',
  'translate(-25px, -26px)',
  'translate(-25px, 0px)',
  'translate(-25px, 26px)',
  'translate(-17px, -23px)',
  'translate(-20px, 1px)',
  'translate(-25px, 25px)'
]

const BookBubble = styled.img`
    transition: all 0.4s;
    animation: fromTop 1.8s; 
    width: 415px;
    display: block;
    @media (min-width: 1020px) {
      width: 560px;
    }
  `

const TopShelf = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  pointer-events: none;
  @media (min-width: 1020px) {
    top: -45px;
  }
`

const SecondShelf = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  pointer-events: none;
  @media (min-width: 1020px) {
    top: 95px;
  }
`

const ThirdShelf = styled.div`
  position: absolute;
  top: 157px;
  right: 0;
  pointer-events: none;
  @media (min-width: 1020px) {
    top: 197px;
  }
`

const HoverText = styled.div`
  position: absolute;
  transform: rotate(27deg);
  font-size: 1.2em;
  text-transform: uppercase;
  right: -23px;
  bottom: 59px;
  width: 100%;
  color: salmon;
  pointer-events: none;
  text-align: right;
  @media (min-width: 1020px) {
    right: 20px;
    bottom: 115px;
  }
`

const BookCaseContainer = styled.div`
  position: relative;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`

export default function BookCase() {
  const [currentHoverText, setHoverText] = useState(<></>)
  const [transformState, setTransform] = useState('')
  const [opacityState, setOpacity] = useState(0)

  const renderBookRow = (rowIndex) => {
    return bookCaseData[rowIndex].map((book, index) => {
      let idx = index
      if (rowIndex !== 0) idx = Number(index)+Number(rowIndex)*3+1
      return <BookItem key={'bookCaseItem'+index}  courseIndex={idx} course={book} translateResize={translateResize[idx]} setHoverText={renderHoverText}/>
    })
  }

  const renderHoverText = (text, inState) => {
    let arrSplit = text.split('\n')
    if (inState) {
      setOpacity(1)
    } else {
      setOpacity(0)
    }

    if (arrSplit.length > 1) {
      setTransform('translate(0px, 35px)')
      setHoverText(<>{arrSplit[0]}<br/>{arrSplit[1]}</>)
    }
    else {
      setTransform('translate(0px, 0px)')
      setHoverText(<>{arrSplit[0]}</>)
    }
  }

  return (
    <BookCaseContainer>
        <BookBubble src={bookBubble} alt='book bubble'/> 
        <TopShelf>
          { renderBookRow(0) }
        </TopShelf>

        <SecondShelf>
          { renderBookRow(1) }
        </SecondShelf>

        <ThirdShelf>
          { renderBookRow(2) }  
        </ThirdShelf>
        <HoverText>
          {/* {renderHoverText()} */}
          <p style={{margin: 0, transition: 'opacity 0.3s', fontWeight: 700,fontSize: '1.2em', transform: transformState, opacity: opacityState}}>{currentHoverText}</p>
        </HoverText>
      </BookCaseContainer>
    
  )
}