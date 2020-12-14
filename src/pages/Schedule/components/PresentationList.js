import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';
import { filter, get, } from 'lodash'
import moment from 'moment'

import PresentationItem from './PresentationItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  timelineRoot: {
    padding: 0,
    margin: 0,
  },
}))


const PresentationList = (props) => {
  console.log(props)
  const classes = useStyles()
  const { allPresentation, filter: majorFilter = [], sessionStartDate, sessionEndDate } = props

  const getFilteredPresentationList = () => {
    let filteredPresentations = []
    if (majorFilter.length) {
      majorFilter.forEach(majorId => {
        filteredPresentations = [...filteredPresentations, ...get(allPresentation, majorId, [])]
      });
    } else {
      Object.keys(allPresentation).forEach(majorId => {
        filteredPresentations = [...filteredPresentations, ...get(allPresentation, majorId, [])]
      })
    }
    filteredPresentations = filter(filteredPresentations, (presentation) => {
      const { startDate } = presentation
      return moment(sessionStartDate).isSameOrBefore(moment(startDate))
        && moment(sessionEndDate).isSameOrAfter(moment(startDate))
    })
    return filteredPresentations
  }

  const filteredPresentations = getFilteredPresentationList()

  return (
    <div className={classes.root}>
      <Timeline align="left" className={classes.timelineRoot}>
        {
          filteredPresentations.map((presentation, index) => {
            return (
              <PresentationItem 
                key={`presentation-item-${index}-${presentation.title}`} 
                presentation={presentation}  
              />
            )
          })
        }
      </Timeline>
    </div>
  );
}

export default PresentationList