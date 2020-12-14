import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import CourseList from './CourseList'
import ScheduleRecap from './ScheduleRecap'
import SponsorList from './SponsorList'
import Statistics from './Statistics'
import './style.css'

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

const Home = (props) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)



  useEffect(()=>{
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <Banner />
      {
        screenSize >= 600 ?
          <ScheduleRecap recapData = {recapData} percentage={'30%'}/>
        :
        <>
          <ScheduleRecap recapData = {recapData.slice(0,6)} percentage={'30%'}/>
          <ScheduleRecap recapData = {recapData.slice(5,12)} percentage={'0%'}/>
        </>
      }
      <CourseList/>
      <Statistics/>
      <SponsorList/>
    </div>
  )
}

export default Home