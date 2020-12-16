import React, {useState} from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import BookItem from './BookItem'
import SuspenseImage from '../../../components/SuspenseImage'
import bookBubble from '../../../static/images/book-bubble2@2x.png'

const bookCaseData = {
  0: [
    {
      name: 'Hoá học',
      alt: 'hoa hoc',
      image: 3
    },
    {
      name: 'Sinh học\n- Công nghệ sinh học',
      alt: 'sinh hoc-cong nghe sinh hoc',
      image: 4
    },
    {
      name: 'Kỹ thuật hạt nhân\nvà vật lý y khoa',
      alt: 'ky thuat hat nhan va vat ly y khoa',
      image: 10
    },
    {
      name: 'Vật lý-địa cầu\nvà hải dương',
      alt: 'vat ly-dia cau va hai duong',
      image: 5
    }
  ],
  1: [
    {
      name: 'Địa chất và \ntài nguyên Trái đất',
      alt: 'dia chat va tai nguyen trai dat',
      image: 2
    },
    {
      name: 'Khoa học và\nCông nghệ Vật liệu',
      alt: 'khoa hoc va cong nghe vat lieu',
      image: 9
    },
    {
      name: 'Môi trường',
      alt: 'moi truong',
      image: 6
    }
  ],
  2: [
    {
      name: 'Điện tử - Viễn Thông',
      alt: 'dien tu-vien thong',
      image: 8
    },
    {
      name: 'Toán - Tin học',
      alt: 'toan-tin hoc',
      image: 1
    },
    {
      name: `Công nghệ thông tin\n- Truyền thông`,
      alt: 'cntt-truyen thong',
      image: 7
    }
  ]
}

const translateResize = [
  ['translate(-20px, -20px)', 'translate(-20px, -20px)', 'translate(-14px, -20px)', 'translate(-30px,-36px)'],
  ['translate(-20px, 5px)', 'translate(-30px, 10px)', 'translate(-24px,15px)', 'translate(-37px,8px)'],
  ['translate(-22px, 28px)', 'translate(-28px, 45px)', 'translate(-29px,52px)', 'translate(-45px,52px)'],
  ['translate(-24px, 53px)', 'translate(-28px, 80px)', 'translate(-40px, 85px)', 'translate(-48px,98px)'],
  ['translate(-25px, -26px)', 'translate(-20px, -22px)', 'translate(-36px,-12px)', 'translate(-50px,8px)'],
  ['translate(-25px, 0px)', 'translate(-28px, 10px)', 'translate(-40px,27px)', 'translate(-47px,61px)'],
  ['translate(-25px, 26px)', 'translate(-28px, 46px)', 'translate(-37px,70px)', 'translate(-45px,111px)'],
  ['translate(-17px, -23px)', 'translate(-25px, -25px)', 'translate(-17px,15px)', 'translate(-35px,61px)'],
  ['translate(-20px, 1px)', 'translate(-28px, 11px)', 'translate(-28px,51px)', 'translate(-37px,110px)'],
  ['translate(-25px, 25px)', 'translate(-30px, 45px)', 'translate(-37px,87px)', 'translate(-41px,157px)']
]

const BookBubble = styled(SuspenseImage)`
    transition: all 0.4s;
    animation: fromTop 1.8s; 
    width: 415px;
    display: block;
    @media (min-width: 1020px) {
      width: 560px;
    }
    @media (min-width: 1286px) {
      width: 650px;
    }
    // @media (min-width: 1480px) {
    //   width: 800px;
    // }
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
  transform: rotate(27.5deg);
  font-size: 1rem;
  text-transform: uppercase;
  right: -15px;
  bottom: 75px;
  width: 100%;
  color: ${colors.primaryContrastPurple};
  pointer-events: none;
  text-align: right;
  @media (min-width: 1020px) {
    font-size: 1.3rem;
    right: 10px;
    bottom: 105px;
  }
  @media (min-width: 1286px) {
    right: -5px;
    bottom: 115px;
  }
  // @media (min-width: 1480px) {
  //   right: 0px;
  //   bottom: 152px;
  // }
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
      return <BookItem key={'bookCaseItem'+index} courseIndex={idx} course={book} translateResize={translateResize[idx]} setHoverText={renderHoverText}/>
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