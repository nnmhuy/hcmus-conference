import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import moment from 'moment'

import colors from '../../../constants/colors'
import { dateList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    '& .date__tab--0': {
      '&::after': {
        right: 0,
        background: `${colors.primaryGradientLeft}`,
      }
    },
    '& .date__tab--1': {
      '&::after': {
        left: 0,
        background: `${colors.primaryGradientRight}`,
      }
    },
  },
  dateTabRoot: {
    flex: 1,
    position: 'relative',
    cursor: 'pointer',
  },
  dateTab: {
    display: 'flex',
    padding: '10px 0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    transition: 'all 0.6s ease-in-out',
    '&::after': {
      content: '""',
      position: 'absolute',
      transition: 'all 0.6s ease-in-out',
      width: '0%',
      height: '100%',
      zIndex: '-1'
    }
  },
  activeDateTab: {
    background: 'transparent',
    '&::after': {
      width: '100%',
      transform: 'translateZ(0)',
    }
  },
  activeTabDenote: {
    position: 'absolute',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    width: 0,
    height: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: 'all 0.3s ease-in-out',
    borderLeft: '0px solid transparent',
    borderRight: '0px solid transparent',
    // borderTop: `0px solid #403ECF`,
    borderTop: `0px solid ${colors.primaryBlue}`,
    margin: 'auto',
    zIndex: 100,
    '&.active': {
      visibility: 'visible',
      opacity: 1,
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent',
      transform: 'translate3d(-50%, 0, 0)',
      borderTop: `10px solid ${colors.primaryBlue}`,
      pointerEvents: 'auto',
    }
  },
  dateTabTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: `${colors.primaryBlue}`,
    transition: 'all 0.6s',
    lineHeight: "1.7rem",
    paddingBottom: "0.3rem"
  },
  activeDateTabTitle: {
    color: theme.palette.white.main,
  },
  dateTabDate: {
    fontSize: 11,
    color: '#ABA7B3',
    transition: 'all 0.6s',
  },
  activeDateTabDate: {
    color: theme.palette.white.main,
  }
}))

const DateTab = (props) => {
  const classes = useStyles()
  const { label, date, isActive, typeClass, ...rest } = props

  return (
    <div className={classes.dateTabRoot} {...rest}>
      <div className={clsx(classes.dateTab, isActive && classes.activeDateTab) + ` ${typeClass}`}>
        <div className={clsx(classes.dateTabTitle, isActive && classes.activeDateTabTitle)}>
          {label}
        </div>
        <div className={clsx(classes.dateTabDate, isActive && classes.activeDateTabDate)}>
          {moment(date).format("DD/MM/YYYY")}
        </div>
      </div>
      
      <div className={classes.activeTabDenote + `${isActive ? ' active' : ' inactive'}`}></div>
    </div>
  )
}

const DateTabs = (props) => {
  const classes = useStyles()
  const { activeDate, handleChangeActiveDate } = props
  return (
    <div className={classes.root}>
      {
        dateList.map(({name, date}, index) => {
          return (
            <DateTab 
              typeClass={`date__tab--${index}`}
              key={name} label={name} date={date} 
              onClick={() => handleChangeActiveDate(date)}
              isActive={moment(activeDate).isSame(moment(date), 'day')}
            />
          )
        })
      }
    </div>
  );
}

export default DateTabs