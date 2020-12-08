import React from 'react'
import styled from 'styled-components'
import MainEvent from './MainEvent'
import SubEvent from './SubEvent'

const eventRecapData = [
  {
    type: 'main',
    date: '18/12/2020',
    title: 'Khai mạc',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing', 
    time: '8:30'
  },
  {
    type: 'sub',
    date: '18/12/2020',
    title: 'Session 1',
    desc: 'Lorem ipsum dolor', 
    time: '8:30'
  },
  {
    type: 'sub',
    date: '18/12/2020',
    title: 'Session 2',
    desc: 'Lorem ipsum dolor', 
    time: '8:30'
  },
  {
    type: 'main',
    date: '19/12/2020',
    title: 'Khai mạc',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing', 
    time: '8:30'
  },
  {
    type: 'sub',
    date: '19/12/2020',
    title: 'Session 1',
    desc: 'Lorem ipsum dolor', 
    time: '8:30'
  },
  {
    type: 'sub',
    date: '19/12/2020',
    title: 'Session 2',
    desc: 'Lorem ipsum dolor', 
    time: '8:30'
  },
  {
    type: 'main',
    date: '19/12/2020',
    title: 'Tổng kết',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing', 
    time: '8:30'
  },
]

const CourseHeading = styled.h3`
  color: #01458E;
  font-weight: 500;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const EventRecap = (props) => {
  return (
    <div style={{padding: '20px 0 80px 0'}}>
      <CourseHeading>Tóm tắt sự kiện</CourseHeading>
      <FlexColumn>
        <MainEvent eventRec={eventRecapData[0]} />
        <SubEvent eventRec={eventRecapData[1]} />
        <SubEvent eventRec={eventRecapData[2]} />
        <MainEvent eventRec={eventRecapData[3]} />
        <SubEvent eventRec={eventRecapData[4]} />
        <SubEvent eventRec={eventRecapData[5]} />
        <MainEvent eventRec={eventRecapData[6]} final={true}/>
      </FlexColumn>
    </div>
  )
}

export default EventRecap