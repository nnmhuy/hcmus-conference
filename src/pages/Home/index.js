import React from 'react'
import Banner from './Banner';
import CourseList from './CourseList';
import EventRecap from './EventRecap';
import SponsorList from './SponsorList.js';
import Statistics from './Statistics';
import './style.css'

const Home = (props) => {
  return (
    <div>
      <Banner />
      <CourseList/>
      <EventRecap/>
      <Statistics/>
      <SponsorList/>
    </div>
  )
}

export default Home