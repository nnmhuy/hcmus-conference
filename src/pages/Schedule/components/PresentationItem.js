import React from 'react'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

import TimelineDotIcon from './TimelineDotIcon'
import ZoomButton from './ZoomButton'
import AddToCalendarButton from './AddToCalendarButton'
import getMajorInfos from '../../../helpers/getMajorInfos'

import ClockIcon from '@material-ui/icons/AccessTime';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: '6px 16px',
  },
  timelineConnector: {
    background: '#F4F5F8',
    width: 1,
  },
  summaryRoot: {
    cursor: 'pointer'
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  clockIcon: {
    color: '#707070',
    width: 13,
    height: 13,
  },
  timeText: {
    fontSize: '0.8rem',
    marginLeft: 5,
    color: '#4041D2',
    fontWeight: 600,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  expandIcon: {
    color: "#4041D2",
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  majorText: {
    lineHeight: 2,
    color: '#FFFFFF',
    fontSize: '0.8rem',
    fontWeight: 600,
    borderRadius: 80,
    background: 'linear-gradient(to right, #4361EE, #3F37C9, #3A0CA3)',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  descriptionText: {
    fontSize: '1rem',
    color: '#707070'
  },
  authorText: {
    color: '#4041D2',
    fontSize: '0.8rem',
    marginTop: 5,
  }
}))

const PresentationItem = (props) => {
  const classes = useStyles()
  const { presentation } = props
  const { majorId, startDate, endDate, title, description, linkZoom, author } = presentation

  const { majorName, majorIcon } = getMajorInfos(majorId)

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <TimelineItem>
      <TimelineOppositeContent style={{ flex: 0}}/>
      <TimelineSeparator>
        <TimelineConnector className={classes.timelineConnector}/>
        <TimelineDotIcon majorIcon={majorIcon} startDate={startDate} endDate={endDate}/>
        <TimelineConnector className={classes.timelineConnector}/>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.summaryRoot} onClick={() => setIsExpanded(!isExpanded)}>
            <div className={classes.timeContainer}>
              <ClockIcon className={classes.clockIcon}/>
              <span className={classes.timeText}>{`${moment(startDate).format("k:mm A")} - ${moment(endDate).format("k:mm A")}`}</span>
            </div>
            <div className={classes.titleContainer}>
              <div className={classes.title}>{title}</div>
              {isExpanded ? <ExpandLessIcon className={classes.expandIcon}/> : <ExpandMoreIcon className={classes.expandIcon}/>}
            </div>
            <Divider />
          </div>
          <Collapse in={isExpanded}>
            <div className={classes.buttonContainer}>
              <div className={classes.majorText}>{majorName}</div>
              <div>
                <ZoomButton linkZoom={linkZoom}/>
                <AddToCalendarButton {...presentation} />
              </div>
            </div>
            <div className={classes.descriptionText}>{description}</div>
            <div className={classes.authorText}>{author}</div>
          </Collapse>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default PresentationItem