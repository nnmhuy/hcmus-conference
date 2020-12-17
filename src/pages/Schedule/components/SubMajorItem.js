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

import MajorInfoForSubMajor from './MajorInfoForSubMajor'
import PresentationItem from './PresentationItem'
import getMajorInfos from '../../../helpers/getMajorInfos'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    }
  },
  timelineConnector: {
    background: '#F4F5F8',
    width: 1,
  },
  summaryRoot: {
    cursor: 'pointer'
  },
  numberContainer: {
    display: 'flex',
    "@media (max-width: 768px)": {
      flexDirection: 'column',
    }
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
    fontSize: '1rem',
    fontWeight: 'bold',
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
    textAlign: 'center'
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
  const { sessionName, startDate, endDate } = subMajor

  const majorId = subMajor.majorId
  const { majorName, majorIcon } = getMajorInfos(majorId)

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Paper elevation={0} className={classes.paper}>
      <div>{majorName}</div>
      <img src={majorIcon}/>
      <div className={classes.summaryRoot} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={classes.numberContainer}>
        <div className={classes.timeContainer}>
            <img src={presentationIcon} style={{ width: 'auto', height: 15 }} alt="number-presentation-icon" />
            <span className={classes.timeText}>{presentationList.length} bài thuyết trình</span>
          </div>
        </div>
        <div className={classes.titleContainer}>
          <div className={classes.title}>{sessionName}</div>
          {isExpanded ? <ExpandLessIcon className={classes.expandIcon}/> : <ExpandMoreIcon className={classes.expandIcon}/>}
        </div>
        <Divider />
      </div>
      <Collapse in={isExpanded}>
        {
          presentationList.map(presentation => 
            <PresentationItem 
              key={`${presentation.id}-${presentation.name}`} 
              presentation={presentation}
              subMajor={subMajor}
            />
          )
        }
      </Collapse>
    </Paper>
  )
}

export default SubMajorItem