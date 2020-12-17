import React from 'react'
import styled from 'styled-components'

import BgBanner from '../../../static/images/bg-banner-with-flakes-2@2x.png'
import BgBannerMobile from '../../../static/images/bg-banner-with-flakes-mobi@2x.png'
import BookCase from './BookCase'
import BrandName from './BrandName'

const OverlayContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 50px;
  max-width: 1100px;
  @media (min-width: 800px) {
    flex-direction: row;
    padding-bottom: 0;
  }
  @media (max-width: 800px) {
    margin-top: 30px;
  }
  @media (max-width: 1286px) {
    max-width: 950px;
  }
  @media (min-width: 1480px) {
    max-width: 1165px;
  }
`

const BannerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 90px;
  padding: 105px 0 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url(${BgBannerMobile});
  
  @media (min-width: 500px) {
    background-image: url(${BgBanner});
    height: 570px;
    background-position: 90% bottom;
  }
  @media (min-width: 1286px) {
    background-image: url(${BgBanner});
    background-position: center bottom;
    // height: 570px;
  }
  @media (min-width: 1480px) {
    background-size: 100% 100%;
  }

`

function Banner() {
  return (
    <BannerContainer>
      {/* <ImageBackground src={bgBanner} /> */}
      <OverlayContainer>
        {/* <div style={styles.bannerQuote}> */}
          <BrandName/>
        {/* </div> */}
        <BookCase/>
      </OverlayContainer>
    </BannerContainer>
  )
}

export default Banner;