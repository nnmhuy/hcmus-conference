import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { get, find } from 'lodash'

import { dateList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  tabContainer: {
    background: 'rgba(231, 238, 255, 0.6)',
    '& .Mui-selected': {
      color: '#4041D2',
    },
    '& .MuiTabs-indicator': {
      background: '#4041D2'
    }
  },
  tabTitle: {
    fontWeight: 'bold',
  },
}))

const SessionTabs = (props) => {
  const classes = useStyles()
  const { activeDate, activeSession, handleChangeActiveSession } = props

  const handleChange = (event, newValue) => {
    handleChangeActiveSession(newValue);
  };
  const sessionList = get(find(dateList, { date: activeDate }), 'sessions', [])

  return (
    <div className={classes.root}>
      <Tabs 
        value={activeSession} 
        onChange={handleChange} 
        className={classes.tabContainer}
        // indicatorColor="primary"
        // textColor="primary"
      >
        {
          sessionList.map(({ name }) => {
            return (
              <Tab key={name} label={name} className={classes.tabTitle}/>
            )
          })
        }
      </Tabs>
    </div>
  );
}

export default SessionTabs