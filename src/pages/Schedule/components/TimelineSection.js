import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'

import DateTabs from './DateTabs'

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    margin: 'auto',
  },
}))

const TimelineSection = (props) => {
  const classes = useStyles()

  const [activeDate, setActiveDate] = React.useState(0);

  const handleChangeActiveDate = (event, newActiveDate) => {
    setActiveDate(newActiveDate);
  };

  return (
    <Paper square className={classes.root}>
      <DateTabs activeDate={activeDate} handleChangeActiveDate={handleChangeActiveDate}/>
    </Paper>
  );
}

export default TimelineSection