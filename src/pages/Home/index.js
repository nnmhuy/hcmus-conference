import React from 'react'
import Banner from './Banner';
import CourseList from './CourseList';
import ScheduleRecap from './ScheduleRecap';
import SponsorList from './SponsorList';
import Statistics from './Statistics';
import './style.css'

const Home = (props) => {
  return (
    <div>
      <Banner />
      <ScheduleRecap/>
      <CourseList/>
      <Statistics/>
      <SponsorList/>
    </div>
  )
}

export default Home