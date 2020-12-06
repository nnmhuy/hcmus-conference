import React, {useState} from 'react'
import BookItem from './BookItem'
import bookBubble from '../../../static/images/book-bubble2@2x.png'

const bookCaseData = {
  row1: [
    {
      name: 'Hoá học',
      alt: 'hoa hoc',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-3.png',
      translate: 'translate(-20px, -20px)'
    },
    {
      name: 'Sinh học\n- Công nghệ sinh học',
      alt: 'sinh hoc-cong nghe sinh hoc',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-4.png',
      translate: 'translate(-30px, 10px)'
    },
    {
      name: 'Kỹ thuật hạt nhân\nvà vật lý y khoa',
      alt: 'ky thuat hat nhan va vat ly y khoa',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-10.png',
      translate: 'translate(-28px, 45px)'
    },
    {
      name: 'Vật lý-địa cầu\nvà hải dương',
      alt: 'vat ly-dia cau va hai duong',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-2.png',
      translate: 'translate(-28px, 80px)'
    }
  ],
  row2: [
    {
      name: 'Địa chất và tài nguyên\nmôi trường',
      alt: 'dia chat va tai nguyen moi truong',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-5.png',
      translate: 'translate(-20px, -22px)'
    },
    {
      name: 'Sinh học - Công nghệ\nsinh học',
      alt: 'sinh hoc-cong nghe sinh hoc',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-4.png',
      translate: 'translate(-28px, 10px)'
    },
    {
      name: 'Môi trường',
      alt: 'moi truong',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-6.png',
      translate: 'translate(-28px, 45px)'
    }
  ],
  row3: [
    {
      name: 'Điện tử - Viễn Thông',
      alt: 'dien tu-vien thong',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-8.png',
      translate: 'translate(-25px, -25px)'
    },
    {
      name: 'Toán - Tin học',
      alt: 'toan-tin hoc',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-1.png',
      translate: 'translate(-28px, 10px)'
    },
    {
      name: `Công nghệ thông tin\n- Truyền thông`,
      alt: 'cntt-truyen thong',
      image: '../../../static/images/sach-tieu-ban/tieu-ban-7.png',
      translate: 'translate(-30px, 45px)'
    }
  ]
}

export default function BookCase() {
  const [currentHoverText, setHoverText] = useState('')

  const renderBookRow = (rowIndex) => {
    return bookCaseData[rowIndex].map((book, index) => {
      return <BookItem key={'bookCaseItem'+index} course={book} setHoverText={setHoverText}/>
    })
  }

  const renderHoverText = () => {
    let arrSplit = currentHoverText.split('\n')
    if (arrSplit.length > 1) {
      return (
        <p style={{margin: 0, fontWeight: 700,fontSize: '1.2em', transform: 'translate(0px, 35px)'}}>{arrSplit[0]}<br/>{arrSplit[1]}</p>  
      )
    }
    return (
      <p style={{margin: 0, fontWeight: 700,fontSize: '1.2em'}}>{arrSplit[0]}</p>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
        <img className="book__bubble" src={bookBubble} style={{ width: '560px', display: 'block' }} alt=''/> 
        <div style={{position:'absolute', top: 0, right: 0, pointerEvents: 'none'}}>
          { renderBookRow('row1') }
        </div>

        <div style={{position:'absolute', top: 140, right: 0, pointerEvents: 'none'}}>
          { renderBookRow('row2') }
        </div>

        <div style={{position:'absolute', top: 242, right: 0, pointerEvents: 'none'}}>
          { renderBookRow('row3') }  
        </div>
        <div style={{
          position: 'absolute',
          transform: 'rotate(27.5deg)',
          fontSize: '1.2em',
          textTransform: 'uppercase',
          right: 20,
          bottom: 120,
          width: '100%',
          color: '#4041D2',
          textAlign: 'right'
        }}>
          {renderHoverText()}
        </div>
      </div>
    
  )
}