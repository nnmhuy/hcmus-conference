import React from 'react'
import styled from 'styled-components'

import bgBanner from '../../../static/images/bg-banner@2x.png'
import BookCase from './BookCase'
import BrandName from './BrandName'

// const ImageBackground = styled.img`
//   width: 100%;
//   display: block;
// `

const OverlayContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 50px;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      {/* <ImageBackground src={bgBanner} /> */}
      <OverlayContainer>
        {/* <div style={styles.bannerQuote}> */}
          <BrandName/>
        {/* </div> */}
          
          
        <BookCase/>
      </OverlayContainer>
    </div>
  )
}

const styles = {
  bannerContainer: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
    padding: '100px 0 0 0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundImage: `url(${bgBanner})`
  },
  bookCaseAbsolute: {
    position: 'relative',
    width: '100%'
  },
  bannerQuote: {
    // background: 'red',
    // height: 200,
    // width: 200
  }
}

export default Banner;