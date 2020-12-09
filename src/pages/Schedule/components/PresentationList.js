import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';

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
  const { presentationList } = props

  return (
    <div className={classes.root}>
      <Timeline align="left" className={classes.timelineRoot}>
        {
          presentationList.map((presentation, index) => {
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