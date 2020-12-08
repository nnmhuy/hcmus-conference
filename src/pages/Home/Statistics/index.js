import React from 'react'
import styled from 'styled-components'

import BgParallax from '../../../static/images/bg-parallax@2x.png'
import StatItem from './StatItem'

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  z-index: 10;
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ParallaxBackground = styled.div`
  position: relative;
  min-height: 300px;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${BgParallax}');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const statData = [
  {
    count: 10,
    title: 'ngành'
  },
  {
    count: 20,
    title: 'bài báo'
  },
  {
    count: 70,
    title: 'tác giả'
  },
  {
    count: 400,
    title: 'lượt tham gia'
  }
]


const Statistics = () => {
  return (
    <ParallaxBackground>
      <Overlay/>
      <FlexRow>
        {
          statData.map((statItem, index) => {
            return <StatItem stat={statItem} key={'statItem'+index}/>
          })
        }
      </FlexRow>
    </ParallaxBackground>
  )
}

export default Statistics