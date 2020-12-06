import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';

import PresentationItem from './PresentationItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const PresentationList = (props) => {
  const classes = useStyles()
  const { presentationList } = props

  return (
    <div className={classes.root}>
      <Timeline align="left">
        {
          presentationList.map((presentation, index) => {
            return (
              <PresentationItem key={`presentation-item-${index}`} presentation={presentation}/>
            )
          })
        }
      </Timeline>
    </div>
  );
}

export default PresentationList