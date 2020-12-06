import React from 'react'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import moment from 'moment'


import ClockIcon from '@material-ui/icons/AccessTime';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CalendarIcon from '@material-ui/icons/Today';
import ZoomIcon from '../../../static/images/zoom-icon.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  summaryRoot: {
    cursor: 'pointer'
  }
}))

const AddToCalendarButton = (props) => {
  const addToCalendarEl = React.useRef(null);

  const { title, author, description, startDate, endDate, linkZoom } = props
  let icon = { 'calendar-plus-o': 'left' };
  let event = {
    title: `${title} (${author})`,
    description,
    location: linkZoom,
    startTime: startDate,
    endTime: endDate,
  };

  return ( 
    null
  )
}

const PresentationItem = (props) => {
  const classes = useStyles()
  const { presentation } = props
  const { major, startDate, endDate, title, description, linkZoom, author } = presentation

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <TimelineItem>
      <TimelineOppositeContent style={{ flex: 0}}>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          {/* TODO: icon and color base on major */}
          {/* TODO: blinding and color of past, current, future presentation */}
          <LaptopMacIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.summaryRoot} onClick={() => setIsExpanded(!isExpanded)}>
            <div className={classes.timeContainer}>
              <ClockIcon />
              <span>{moment(startDate).format("k:mm A")}</span>
            </div>
            <div>
              <div>{title}</div>
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={
                    <IconButton size="small" >
                      <img src={ZoomIcon} style={{ height: 25 }}/>
                    </IconButton>}
                    href={linkZoom}
                    target="_blank"
                    onClick={(e) => { e.stopPropagation() } }
                  >
                  Vào phòng Zoom
                </Button>
                <AddToCalendarButton {...presentation}/>
                {isExpanded ? <ExpandLessIcon/> :<ExpandMoreIcon/>}
              </div>
            </div>
            <div>#{major}</div>
            <Divider />
          </div>
          <Collapse in={isExpanded}>
            <div>
              {description}
            </div>
            <div>
              {author}
            </div>
          </Collapse>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default PresentationItem