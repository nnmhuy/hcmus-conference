import React, { useState, useEffect } from 'react'

import BookCase from './BookCase'

const Banner = () => {
  const [curDate, setDate]= useState('')
  useEffect(() => {
    showTimer()
  }, [])
  const showTimer = () => {
    setInterval(()=>{
      // 18/12/2020 07:00:00
      const t1 = new Date(2020,12,18,7,0);

    // current day
      const t2 = new Date();
      setDate(t2.getSeconds())
      
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60)); 
      // return parseInt((t1-t2)/(24*3600*1000))
    }, 1000)
    
  }

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.bannerQuote}>
        <p>{curDate}</p>
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