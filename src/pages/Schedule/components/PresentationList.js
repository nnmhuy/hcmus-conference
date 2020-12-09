import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';
import { filter, cloneDeep } from 'lodash'
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


// TODO: scroll to active presentation
const PresentationList = (props) => {
  const classes = useStyles()
  const { allPresentation, filter: majorFilter = {}, sessionStartDate, sessionEndDate } = props

  const getFilteredPresentationList = () => {
    let filteredPresentations = cloneDeep(allPresentation)
    if (!majorFilter[-1]) {
      filteredPresentations = filter(filteredPresentations, presentation => majorFilter[presentation.majorId])
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
                key={`presentation-item-${index}`} 
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