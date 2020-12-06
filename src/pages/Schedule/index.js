import React from 'react'
import { useLocation } from 'react-router-dom'

import TimelineSection from './components/TimelineSection'

const Schedule = (props) => {
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const filter = JSON.parse(query.get('filter')) || {};

  return (
    <div>
      <TimelineSection filter={filter}/>
    </div>
  )
}

export default Schedule