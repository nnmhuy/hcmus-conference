import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { dateList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  dateTabRoot: {
    flex: 1,
    cursor: 'pointer',
  },
  dateTab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  activeDateTab: {
    background: 'linear-gradient(to right, #4361EE, #3F37C9, #3A0CA3)',
  },
  activeTabDenote: {
    position: 'relative',
    width: 0,
    height: 0,
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderTop: `10px solid #403ECF`,
    margin: 'auto',
    zIndex: 100,
  },
  dateTabTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: '#4041D2',
  },
  activeDateTabTitle: {
    color: theme.palette.white.main,
  },
  dateTabDate: {
    fontSize: 11,
    color: '#ABA7B3',
  },
  activeDateTabDate: {
    color: theme.palette.white.main,
  }
}))

const DateTab = (props) => {
  const classes = useStyles()
  const { label, date, isActive, ...rest } = props

  return (
    <div className={classes.dateTabRoot} {...rest}>
      <div className={clsx(classes.dateTab, isActive && classes.activeDateTab)}>
        <div className={clsx(classes.dateTabTitle, isActive && classes.activeDateTabTitle)}>
          {label}
        </div>
        <div className={clsx(classes.dateTabDate, isActive && classes.activeDateTabDate)}>
          {date}
        </div>
      </div>
      {isActive &&
        <div className={classes.activeTabDenote}></div>
      }
    </div>
  )
}

const DateTabs = (props) => {
  const classes = useStyles()
  const { activeDate, handleChangeActiveDate } = props
  return (
    <div className={classes.root}>
      {
        dateList.map(({name, date}) => {
          return (
            <DateTab 
              key={name} label={name} date={date} 
              onClick={() => handleChangeActiveDate(date)}
              isActive={activeDate === date}
            />
          )
        })
      }
    </div>
  );
}

export default DateTabs