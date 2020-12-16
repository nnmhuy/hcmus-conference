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
    time: new Date("December 18, 2020 07:45:00"),
    title: 'Khai mạc'
  },
  {
    type: 'sub',
    time: new Date("December 18, 2020 08:30:00"),
    title: 'Phiên toàn thể'
  },
  {
    type: 'sub',
    time: new Date("December 18, 2020 10:00:00"),
    title: 'Phiên 1'
  },
  {
    type: 'sub',
    time: new Date("December 18, 2020 13:30:00"),
    title: 'Phiên 2'
  },
  {
    type: 'main',
    time: new Date("December 19, 2020 08:00:00"),
    title: 'Phiên 1'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 10:00:00"),
    title: 'Phiên 2'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 13:30:00"),
    title: 'Phiên 3'
  },
  {
    type: 'sub',
    time: new Date("December 19, 2020 15:10:00"),
    title: 'Phiên 4'
  },
  {
    type: 'main',
    time: new Date("December 19, 2020 16:30:00"),
    title: 'Tổng kết'
  }
]

const Home = (props) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)



  useEffect(()=>{
    function handleResize() {
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
          <ScheduleRecap recapData = {recapData.slice(0,5)}/>
          <ScheduleRecap recapData = {recapData.slice(4,12)}/>
        </>
      }
      <CourseList/>
      <Statistics/>
      <SponsorList/>
    </div>
  )
}

export default Home