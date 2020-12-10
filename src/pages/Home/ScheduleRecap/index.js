import React from 'react'
import styled from 'styled-components'
import MainEvent from './MainEvent'
import SubEvent from './SubEvent'
import { useSelector } from 'react-redux';

const recapData = [
  {
    type: 'main',
    time: '08:30',
    date: '18/12',
    title: 'Khai mạc'
  },
  {
    type: 'sub',
    time: '09:30',
    date: '18/12',
    title: 'Phiên 1'
  },
  {
    type: 'sub',
    time: '10:30',
    date: '18/12',
    title: 'Phiên 2'
  },
  {
    type: 'sub',
    time: '13:30',
    date: '18/12',
    title: 'Phiên 3'
  },
  {
    type: 'sub',
    time: '15:30',
    date: '18/12',
    title: 'Phiên 4'
  },
  {
    type: 'main',
    time: '07:30',
    date: '19/12',
    title: 'Khai mạc'
  },
  {
    type: 'sub',
    time: '08:30',
    date: '19/12',
    title: 'Phiên 1'
  },
  {
    type: 'sub',
    time: '10:30',
    date: '19/12',
    title: 'Phiên 2'
  },
  {
    type: 'sub',
    time: '13:30',
    date: '19/12',
    title: 'Phiên 3'
  },
  {
    type: 'sub',
    time: '15:30',
    date: '19/12',
    title: 'Phiên 4'
  },
  {
    type: 'main',
    time: '16:30',
    date: '19/12',
    title: 'Tổng kết'
  },
]

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
  width: 30%;
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
const ScheduleRecap = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <RecapContainer>
      <MainRoad></MainRoad>
      <PercentageRoad></PercentageRoad>
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