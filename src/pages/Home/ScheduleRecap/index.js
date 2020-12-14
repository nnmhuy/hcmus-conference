import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainEvent from './MainEvent'
import SubEvent from './SubEvent'

import { getTimePercent } from '../../../helpers/timeConverter'

const RecapContainer = styled.div`
  margin: 0 auto 70px auto;
  width: 80%;
  position: relative;
`

const MainRoad = styled.div`
  width: 100%;
  height: 7px;
  background: #EFEFEF;
  border-radius: 100px;
`

const PercentageRoad = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.percentage};
  height: 7px;
  background-color: #CEE0F2;
  border-radius: 100px;
`

const EventContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
`
//start --- p1---p2---p3---p4---p1---p2---p3---p4---end
function ScheduleRecap(props) {
  const { recapData } = props
  const [percentage, setPercentage] = useState("0")

  useEffect(() => {
    const timer = setInterval(()=>{
      setPercentage(`${getTimePercent(recapData)}%`)
      console.log(percentage)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <RecapContainer>
      <MainRoad/>
      <PercentageRoad percentage={percentage}/>
      <EventContainer>
        {
          recapData.map((item, index) => {
            if (item.type === 'main')
              return <MainEvent key={'sched-recap-'+index} sched={item}/>
            else 
              return <SubEvent key={'sched-recap-'+index} sched={item}/>
          })
        }
      </EventContainer>
    </RecapContainer>
  )
}

export default ScheduleRecap