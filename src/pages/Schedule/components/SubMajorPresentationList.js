import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';
import { filter, get, } from 'lodash'
import moment from 'moment'

import PresentationItem from './PresentationItem'
import SubMajorItem from './SubMajorItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  timelineRoot: {
    padding: 0,
    margin: 0,
  },
}))


const MajorPresentationList = (props) => {
  const classes = useStyles()
  // const { sessionDic } = useSelector(presentation => presentation.sessionDic)
  // console.log('session dic ', sessionDic)

  const { allPresentation, sessionDic, filter: majorFilter = [], sessionDay } = props
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
      return sessionDic[presentation.sessionId].day == sessionDay
    })
    return filteredPresentations
  }
  
  // console.log("before", allPresentation)
  

  const filteredPresentations = getFilteredPresentationList()
  console.log("dic", sessionDic)
  console.log("after", filteredPresentations)

  return (
    <div className={classes.root}>
      <Timeline align="left" className={classes.timelineRoot}>
        {
          filteredPresentations.map((presentation, index) => {
            return (
              <SubMajorItem 
                key={`presentation-item-${index}-${presentation.title}`} 
                presentation={presentation}  
                sessionDic={sessionDic}
              />
            )
          })
        }
      </Timeline>
    </div>
  );
}

export default MajorPresentationList