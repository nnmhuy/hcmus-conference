import React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BgParallax from '../../../static/images/bg-parallax@2x.png'
import StatItem from './StatItem'

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  z-index: 10;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
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
  @media (min-width: 1286px) {
    min-height: 350px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Statistics = (props) => {
  const { statistic } = props
  return (
    <ParallaxBackground>
      <Overlay/>
      <FlexRow>
        {
          statistic.map((stat, index) => {
            return <StatItem label={stat.label} count={stat.value} key={'stat-item' + index} />
          })
        }
      </FlexRow>
    </ParallaxBackground>
  )
}

const mapStateToProps = ({ presentation, }) => {
  return {
    statistic: presentation.statistic,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)