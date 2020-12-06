import React from 'react'

import bookShadow from '../../../static/images/ke-sach/shadow.png'
import tieuBan1 from '../../../static/images/sach-tieu-ban/tieu-ban-7.png'

export default function BookItem(props) {
  const {course, setHoverText} = props
  const { alt, name, image, translate } = course

  return (
    <div style={{ transform: `${translate}`}} className='image__bookholder' 
      onMouseOver={() => setHoverText(name)}
      onMouseLeave={() => setHoverText('')}
    >
      <img className='image__shadow' src={bookShadow} alt="book shadow" />
      <img className='image__book' src={tieuBan1} alt={alt} />
    </div>
  )
}