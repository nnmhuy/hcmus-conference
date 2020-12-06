import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

import { presentationList } from '../../../constants/constants'

import DateTabs from './DateTabs'
import SessionTabs from './SessionTabs'
import PresentationList from './PresentationList'

const useStyles = makeStyles(theme => ({
  root: {
    width: '85%',
    margin: 'auto',
  },
}))

const TimelineSection = (props) => {
  const classes = useStyles()

  const [activeDate, setActiveDate] = React.useState(moment().isBefore(moment("2020-12-18")) ? moment("2020-12-18").format("DD/MM/YYYY") : moment().format("DD/MM/YYYY"));
  const handleChangeActiveDate = (newActiveDate) => {
    setActiveDate(newActiveDate);
  };

  const [activeSession, setActiveSession] = React.useState(0);
  const handleChangeActiveSession = (newActiveSession) => {
    setActiveSession(newActiveSession)
  }

  return (
    <div className={classes.root}>
      <DateTabs activeDate={activeDate} handleChangeActiveDate={handleChangeActiveDate}/>
      <SessionTabs activeDate={activeDate} activeSession={activeSession} handleChangeActiveSession={handleChangeActiveSession}/>
      <PresentationList presentationList={presentationList}/>
    </div>
  );
}

export default TimelineSection