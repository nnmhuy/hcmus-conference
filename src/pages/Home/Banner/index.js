import React from 'react'

import BookCase from './BookCase'

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerQuote}>
        <p></p>
      </div>
        
        
      <BookCase/>
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