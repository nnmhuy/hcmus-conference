import { Image } from 'antd'
import React from 'react'
import './style.css'

import firstRow from '../../static/images/ke-sach/first_row.png'
import secondRow from '../../static/images/ke-sach/sec_row.png'
import thirdRow from '../../static/images/ke-sach/third_row.png'
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

      <div style={styles.bookCaseContainer}>
        <div style={styles.bookCaseAbsolute}>
          <div style={{ position: 'absolute', top: 0 }}>
            <img src={firstRow} style={{ height: 240 }} />
            <div style={{ position: 'absolute', bottom: 30 }}>
              <div style={{ position: 'relative', width: 80, display:'inline-block', transform: 'translate(50px, -80px)'}} className='image__bookholder'>
                <img className='image__shadow' src={bookShadow} style={{position: 'absolute', width: '100%', display: 'block', bottom: 0, right: -10}}/>
                <img className='image__book' src={tieuBan1} style={{position: 'relative', width: '100%', display: 'block'}}/>
              </div>
              <img src={tieuBan2} style={{ height: 100, transform: 'translate(45px, -90px)' }} />
              <img src={tieuBan3} style={{ height: 100, transform: 'translate(40px, -50px)' }} />
              <img src={tieuBan4} style={{ height: 100, transform: 'translate(40px, -10px)' }} />
            </div>
          </div>

          <div style={{ position: 'absolute', top: 135 }}>
            <img src={secondRow} style={{ height: 240 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 65 }}>
              <img src={tieuBan5} style={{ height: 100, transform: 'translate(50px, -130px)' }} />
              <img src={tieuBan6} style={{ height: 100, transform: 'translate(45px, -90px)' }} />
              <img src={tieuBan7} style={{ height: 100, transform: 'translate(40px, -50px)' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', top: 270 }}>
            <img src={thirdRow} style={{ height: 240 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 65 }}>
              <img src={tieuBan8} style={{ height: 100, transform: 'translate(50px, -130px)' }} />
              <img src={tieuBan9} style={{ height: 100, transform: 'translate(45px, -90px)' }} />
              <img src={tieuBan10} style={{ height: 100, transform: 'translate(40px, -50px)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  bannerContainer: {
    display: 'flex',
    width: '90%',
    margin: '0 auto',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '60px 0 50px 0'
  },
  bookCaseAbsolute: {
    height: 500,
    position: 'relative',
    width: 350
  },
  bannerQuote: {
    background: 'red',
    height: 200,
    width: 200
  }
}

export default Banner;