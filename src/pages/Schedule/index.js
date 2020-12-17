import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import FilterSection from './components/FilterSection'
import TimelineSection from './components/TimelineSection'
import timeSessionList from './components/TimeSessionList'

const useStyles = makeStyles(theme => ({
  header: {
    fontSize: 34,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  root: {
    width: '80%',
    marginTop: 80,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
    paddingBottom: 50,
  },
}))

const Schedule = (props) => {
  const { allPresentation, allSession, sessionDic } = props
  console.log('session Dic', sessionDic)

  const location = useLocation()
  const query = new URLSearchParams(location.search);
  let filter = query.get('filter')
  try {
    filter = JSON.parse(filter)
  } catch (error) {
    filter = []
  }
  if (!Array.isArray(filter)) {
    filter = []
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>Schedule</div>
      <FilterSection query={query} filter={filter}/>
      <TimelineSection
        allPresentation={allPresentation} 
        allSession={timeSessionList}  
        filter={filter}
        sessionDic={sessionDic}
      />
    </div>
  )
}

const mapStateToProps = ({ presentation, }) => {
  return {
    allPresentation: presentation.allPresentation,
    allSession: presentation.allSession,
    sessionDic: presentation.sessionDic
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)