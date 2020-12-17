import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import colors from '../../../constants/colors'
import { majorList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    margin: 'auto',
    textAlign: 'center',
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
  },
  majorContainer: {
    display: 'inline-block',
    lineHeight: 2,
    paddingLeft: 12,
    paddingRight: 12,
    margin: 5,
    color: '#FFFFFF',
    borderRadius: 50,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    opacity: '0.2',
    background: `${colors.primaryGradientLeft}`,
  },
  activeMajor: {
    opacity: 1,
  }
}))

const DesktopFilter = (props) => {
  const classes = useStyles()
  const { activeFilters, toggleFilter } = props

  return (
    <div className={classes.root}>
      <span
        className={clsx(classes.majorContainer, !activeFilters.length && classes.activeMajor)}
        onClick={() => toggleFilter(-1)}
      >
        Tất cả
      </span>
      {
        majorList.map(major => {
          const { id, name } = major
          return (
            <span
              key={name}
              className={clsx(classes.majorContainer, activeFilters.includes(id) && classes.activeMajor)}
              onClick={() => toggleFilter(id)}
            >
              {name}
            </span>
          )
        })
      }
    </div>
  );
}

export default DesktopFilter