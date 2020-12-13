import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { cloneDeep, remove, find } from 'lodash'
import { useHistory } from 'react-router-dom'

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
    background: '#D5DDFF',
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
    background: 'linear-gradient(to right, #4361EE, #3F37C9, #3A0CA3)',
  },
  activeMajor: {
    opacity: 1,
  }
}))

const FilterSection = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { query, filter } = props
  const [activeFilters, setActiveFilters] = useState(filter)

  const toggleFilter = (id) => {
    let newFilters = cloneDeep(activeFilters)
    if (id === -1) {
      newFilters = []
    } else {
      if (newFilters.includes(id)) {
        newFilters = newFilters.filter(item => item !== id)
      } else {
        newFilters.push(id)
      }
    }
    setActiveFilters(newFilters)

    query.set('filter', JSON.stringify(newFilters))
    history.push(`/chuong-trinh?${query.toString()}`)
  }

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

export default FilterSection