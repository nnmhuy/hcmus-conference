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
  const { allPresentation, allSubMajor, filter: majorFilter = [], sessionDay } = props

  const filteredSubMajor = filter(allSubMajor, 
    subMajor => 
    subMajor.day === sessionDay 
    && (majorFilter.length === 0 || majorFilter.includes(subMajor.majorId))
  )

  return (
    <div className={classes.root}>
      <Timeline align="left" className={classes.timelineRoot}>
        {
          filteredSubMajor.map((subMajor, index) => {
            return (
              <SubMajorItem 
                key={`presentation-item-${index}-${subMajor.id}`} 
                presentationList={allPresentation[subMajor.sessionId]}
                subMajor={subMajor}
              />
            )
          })
        }
      </Timeline>
    </div>
  );
}

export default MajorPresentationList