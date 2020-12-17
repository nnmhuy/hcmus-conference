import React from 'react'
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  timelineDot: {
    margin: 0, 
    boxShadow: 'none', 
    boxSizing: 'border-box',
    width: 40,
    height: 40,
    borderWidth: 2
  },
  passedDot: {
    background: '#F5F5F5',
    filter: 'gray', /* IE6-9 */
    '-webkit-filter': 'grayscale(1)', /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: 'grayscale(1)', /* Microsoft Edge and Firefox 35+ */
  },
  liveDot: {
    animation: 'blinkBorder 0.75s step-end infinite alternate',
    '-webkit-animation': 'blinkBorder 0.75s step-end infinite alternate'
  },
  futureDot: {
    background: '#D5DDFF',
  },
  icon: {
    width: 30, 
    height: 30,
    margin: 'auto'
  }
}))

const getStatus = (startDate, endDate) => {
  if (moment().isAfter(moment(endDate))) return 0
  if (moment().isBefore(moment(startDate))) return 2
  return 1
}


const TimelineDotIcon = (props) => {
  const classes = useStyles()
  const { majorIcon, startDate, endDate } = props

  const status = getStatus(startDate, endDate)

  return (
    <TimelineDot 
      color="primary" 
      variant={status === 1 ? "outlined" : "default"} 
      className={clsx(
        classes.timelineDot, 
        status === 0 && classes.passedDot,
        status === 1 && classes.liveDot,
        status === 2 && classes.futureDot,
      )}
    >
      <img src={majorIcon} className={classes.icon} alt="major-icon"/>
    </TimelineDot>
  )
}

export default TimelineDotIcon