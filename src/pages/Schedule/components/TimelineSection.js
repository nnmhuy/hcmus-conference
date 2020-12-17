import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import { get, filter } from 'lodash'

import DateTabs from './DateTabs'
import SessionTabs from './SessionTabs'
import PresentationList from './PresentationList'
import SubMajorPresentationList from './SubMajorPresentationList'

import { dateList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #F4F5F8',
    maxWidth: 900,
    margin: "auto"
  },
}))

const TimelineSection = (props) => {
  const classes = useStyles()
  const { allSession, allPresentation, sessionDic, filter: majorFilter } = props

  const [activeDate, setActiveDate] = React.useState(
    moment().isBefore(moment(dateList[0].date), 'day') 
      || moment().isAfter(moment(dateList[dateList.length - 1].date), 'day') 
    ? moment(dateList[0].date) 
    : moment()
  );
  const handleChangeActiveDate = (newActiveDate) => {
    setActiveDate(newActiveDate);
    setActiveSession(0)
  };

  const [activeSession, setActiveSession] = React.useState(0);
  const handleChangeActiveSession = (newActiveSession) => {
    setActiveSession(newActiveSession)
  }

  const sessionList = filter(allSession, session => 
    moment(session.startDate).isSame(activeDate, 'day')
  )
    
  return (
    <div className={classes.root}>
      <DateTabs activeDate={activeDate} handleChangeActiveDate={handleChangeActiveDate}/>
      <SessionTabs 
        sessionList={sessionList} 
        activeSession={activeSession} 
        handleChangeActiveSession={handleChangeActiveSession}
      />
      {/* <PresentationList 
        allPresentation={allPresentation} 
        filter={majorFilter}
        sessionStartDate={get(sessionList, `[${activeSession}].startDate`, '')}
        sessionEndDate={get(sessionList, `[${activeSession}].endDate`, '')}
      /> */}
      <SubMajorPresentationList 
        allPresentation={allPresentation} 
        filter={majorFilter}
        // sessionStartDate={get(sessionList, `[${activeSession}].startDate`, '')}
        sessionDay={get(sessionList, `[${activeSession}].day`, '')}
        sessionDic={sessionDic}
      />
    </div>
  );
}

export default TimelineSection