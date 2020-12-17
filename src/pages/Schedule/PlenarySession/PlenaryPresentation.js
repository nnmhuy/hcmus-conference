import React from 'react'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import clsx from 'clsx'

import ClockIcon from '@material-ui/icons/AccessTime';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import colors from '../../../constants/colors'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
  },
  summaryRoot: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  presentationTitle: {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: `${colors.logoDarkBlue}`,
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
    // color: `${colors.primaryBlue}`,
    // fontWeight: 600
  },
  titleContainer: {

  },
  title: {
    fontWeight: 600,
    fontSize: '1.5rem',
    color: `${colors.primaryBlue}`,
    maxWidth: 500
  },
  author: {
    fontWeight: 600
  },
  expandIcon: {
    color: `${colors.primaryOrange}`,
  },
  descriptionLabel: {
    fontWeight: 600,
    color: `${colors.primaryOrange}`,
    textAlign: 'center',
    fontSize: "1rem",
    marginTop: 10
  }
}))



const PlenaryPresentation = (props) => {
  const classes = useStyles()
  const { presentation, index: presentationIndex } = props
  const { name, author, startDate, endDate, summary, biography } = presentation

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.summaryRoot} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={classes.presentationTitle}>
          Báo cáo toàn thể {presentationIndex + 1}
        </div>
        <div className={classes.titleContainer}>
          <div style={{ marginBottom: 5, textAlign: 'center' }}>
            <div className={classes.title}>{name}</div>
            <div className={classes.author}>{author}</div>
          </div>
        </div>
        <div className={classes.numberContainer}>
          <div className={classes.timeContainer}>
            <ClockIcon className={classes.clockIcon} />
            <span className={classes.timeText}>{`${moment(startDate).format("k:mm A")} - ${moment(endDate).format("k:mm A")}`}</span>
          </div>
        </div>
        {isExpanded ? <ExpandLessIcon className={classes.expandIcon} /> : <ExpandMoreIcon className={classes.expandIcon} />}
        <Divider style={{ width: '100%' }} />
      </div>
      <Collapse in={isExpanded}>
        <div>
          <div className={classes.descriptionLabel}>
            Tiểu sử khoa học
          </div>
          <div className={classes.descriptionText}>{biography}</div>
        </div>
        <div>
          <div className={classes.descriptionLabel}>
            Tóm tắt báo cáo
          </div>
          <div className={classes.descriptionText}>{summary}</div>
        </div>
      </Collapse>
    </div>
  )
}

export default PlenaryPresentation