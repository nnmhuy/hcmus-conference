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
    time: new Date("December 13, 2020 8:30:00"),
    title: 'Khai mạc'
  },
  {
    type: 'main',
    time: new Date("December 14, 2020 9:30:00"),
    title: 'Phiên 1'
  },
  {
    type: 'main',
    time: new Date("December 15, 2020 10:30:00"),
    title: 'Phiên 2'
  },
  {
    type: 'sub',
    time: new Date("December 18, 2020 13:30:00"),
    title: 'Phiên 3'
  },
  {
    type: 'sub',
    time: new Date("December 18, 2020 15:30:00"),
    title: 'Phiên 4'
  },
  {
    type: 'main',
    time: new Date("December 19, 2020 7:30:00"),
    title: 'Khai mạc'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 8:30:00"),
    title: 'Phiên 1'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 10:30:00"),
    title: 'Phiên 2'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 13:30:00"),
    title: 'Phiên 3'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 15:30:00"),
    title: 'Phiên 4'
  },
  {
    type: 'main',
    time: new Date("December 19, 2020 16:30:00"),
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
          <ScheduleRecap recapData = {recapData}/>
        :
        <>
          <ScheduleRecap recapData = {recapData.slice(0,6)}/>
          <ScheduleRecap recapData = {recapData.slice(5,12)}/>
        </>
      }
      <CourseList/>
      <Statistics/>
      <SponsorList/>
    </div>
  )
}

export default Home