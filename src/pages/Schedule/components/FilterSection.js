import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { cloneDeep } from 'lodash'
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
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    color: '#FFFFFF',
    borderRadius: 20,
    fontSize: 12,
    cursor: 'pointer',
  },
  activeMajor: {
    background: 'linear-gradient(to right, #4361EE, #3F37C9, #3A0CA3)',
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
      newFilters = {}
      if (!activeFilters[-1]) {
        newFilters[-1] = true
      }
    } else {
      newFilters[-1] = false
      if (filter[id]) {
        delete newFilters[id]
      } else {
        newFilters[id] = true
      }
    }
    setActiveFilters(newFilters)

    query.set('filter', JSON.stringify(newFilters))
    history.push(`/chuong-trinh?${query.toString()}`)
  }

  return (
    <div className={classes.root}>
      <span
        className={clsx(classes.majorContainer, activeFilters[-1] && classes.activeMajor)}
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
              className={clsx(classes.majorContainer, activeFilters[id] && classes.activeMajor)}
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