import { Image } from 'antd'
import React from 'react'
import './style.css'

import bookBubble from '../../static/images/book-bubble2@2x.png'

import bookShadow from '../../static/images/ke-sach/shadow.png'

// Cac tieu ban
import tieuBan1 from '../../static/images/sach-tieu-ban/tieu-ban-1.png'
import tieuBan2 from '../../static/images/sach-tieu-ban/tieu-ban-2.png'
import tieuBan3 from '../../static/images/sach-tieu-ban/tieu-ban-3.png'
import tieuBan4 from '../../static/images/sach-tieu-ban/tieu-ban-4.png'
import tieuBan5 from '../../static/images/sach-tieu-ban/tieu-ban-5.png'
import tieuBan6 from '../../static/images/sach-tieu-ban/tieu-ban-6.png'
import tieuBan7 from '../../static/images/sach-tieu-ban/tieu-ban-7.png'
import tieuBan8 from '../../static/images/sach-tieu-ban/tieu-ban-8.png'
import tieuBan9 from '../../static/images/sach-tieu-ban/tieu-ban-9.png'
import tieuBan10 from '../../static/images/sach-tieu-ban/tieu-ban-10.png'


const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerQuote}>

      </div>
      <div style={{ position: 'relative' }}>
        <img src={bookBubble} style={{ width: '560px', display: 'block' }} /> 
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-20px, -20px)' }} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan1} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-30px, 10px)' }} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan2} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 45px)' }} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan3} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 80px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan4} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>

        </div>

        <div style={{ position: 'absolute', top: 140, right: 0 }}>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-20px, -20px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan5} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 10px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan6} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 45px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan7} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
        </div>

        <div style={{ position: 'absolute', top: 242, right: 0 }}>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-25px, -25px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan8} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 10px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan9} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
          <div style={{ position: 'relative', width: 70, display: 'inline-block', transform: 'translate(-28px, 45px)'}} className='image__bookholder'>
            <img className='image__shadow' src={bookShadow} style={{ position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10 }} />
            <img className='image__book' src={tieuBan10} style={{ position: 'relative', width: '100%', display: 'block' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  bannerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '60px 0px'
  },
  bookCaseAbsolute: {
    position: 'relative',
    width: '100%'
  },
  bannerQuote: {
    background: 'red',
    height: 200,
    width: 200
  }
}

export default Banner;