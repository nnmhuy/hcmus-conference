import React, { useState } from 'react';
import { cloneDeep, } from 'lodash'
import { useHistory } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MobileFilter from './MobileFilter'
import DesktopFilter from './DesktopFilter'

const FilterSection = (props) => {
  const history = useHistory()
  const { query, filter } = props
  const [activeFilters, setActiveFilters] = useState(filter)
  const isMobileLayout = useMediaQuery('(max-width:800px)');

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
    isMobileLayout?
      <MobileFilter activeFilters={activeFilters} toggleFilter={toggleFilter}/>
    :
      <DesktopFilter activeFilters={activeFilters} toggleFilter={toggleFilter}/>
  );
}

export default FilterSection