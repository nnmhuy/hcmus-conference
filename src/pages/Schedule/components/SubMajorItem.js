
import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

import SubMajorIcon from './SubMajorIcon'
import PresentationItem from './PresentationItem'
import ZoomButton from './ZoomButton'
import getMajorInfos from '../../../helpers/getMajorInfos'

import ClockIcon from '@material-ui/icons/AccessTime';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import presentationIcon from '../../../static/images/presentation.svg'

import colors from '../../../constants/colors'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: '6px 0',
    '@media (min-width: 568px)': {
      padding: '6px 16px',
    },
  },
  timelineConnector: {
    background: '#F4F5F8',
    width: 1,
  },
  summaryRoot: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  numberContainer: {
    display: 'flex',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    },
    marginBottom: 5,
    alignItems: 'center',
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    "@media (max-width: 768px)": {
      marginRight: 0,
      marginBottom: 5,
    }
  },
  clockIcon: {
    color: `${colors.darkGray}`,
    width: '1.3rem',
    height: '1.3rem',
  },
  timeText: {
    fontSize: '0.8rem',
    lineHeight: '0.7rem',
    marginLeft: 5,
    color: `${colors.primaryBlue}`,
    fontWeight: 600
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 5,
    marginBottom: 5,
  },
  expandIcon: {
    color: `${colors.primaryOrange}`,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    "@media (min-width: 768px)": {
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  majorText: {
    lineHeight: 2,
    color: '#FFFFFF',
    fontSize: '0.8rem',
    fontWeight: 600,
    borderRadius: 80,
    background: `${colors.primaryGradientRight}`,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: '1rem',
    color: `${colors.darkGray}`,
    fontWeight: 500,
  },
  authorText: {
    color: `${colors.primaryBlue}`,
    fontSize: '0.8rem',
    marginTop: 5,
    fontWeight: 500,
  }
}))

const SubMajorItem = (props) => {
  const classes = useStyles()
  const { subMajor, presentationList } = props
  const { sessionName, startDate, endDate, linkZoom, room } = subMajor

  const majorId = subMajor.majorId
  const { majorName, majorIcon } = getMajorInfos(majorId)

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Paper elevation={0} className={classes.paper}>
      <div className={classes.summaryRoot} onClick={() => setIsExpanded(!isExpanded)}>
        <SubMajorIcon majorIcon={majorIcon} startDate={startDate} endDate={endDate} />
        <div className={classes.title}>{sessionName}</div>
        <div className={classes.numberContainer}>
          <div className={classes.timeContainer}>
            <ClockIcon className={classes.clockIcon} />
            <span className={classes.timeText}>{`${moment(startDate).format("k:mm A")} - ${moment(endDate).format("k:mm A")}`}</span>
          </div>
          {room &&
            <div className={classes.timeContainer}>
              <MeetingRoomIcon className={classes.clockIcon} />
              <span className={classes.timeText}>{room}</span>
            </div>
          }
          <div className={classes.timeContainer}>
            <img src={presentationIcon} className={classes.clockIcon} alt="number-presentation-icon" />
            <span className={classes.timeText}>{presentationList.length} bài thuyết trình</span>
          </div>
        </div>
        {/* <div className={classes.majorText}>{majorName}</div> */}
        {isExpanded && <ZoomButton linkZoom={linkZoom} size="large" variant="outlined" style={{ }}/>}
        {isExpanded ? <ExpandLessIcon className={classes.expandIcon}/> : <ExpandMoreIcon className={classes.expandIcon}/>}
        <Divider style={{ width: '100%' }}/>
      </div>
      <Collapse in={isExpanded}>
        <Timeline align="left">
          {
            presentationList.map(presentation => 
              <PresentationItem 
                key={`${presentation.id}-${presentation.name}`} 
                presentation={presentation}
                subMajor={subMajor}
              />
            )
          }
        </Timeline>
      </Collapse>
    </Paper>
  )
}

export default SubMajorItem