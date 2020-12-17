import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import colors from '../../constants/colors'

import FilterSection from './components/FilterSection'
import TimelineSection from './components/TimelineSection'
import timeSessionList from './components/TimeSessionList'


const HeadingText = styled.h2`
  font-size: 2.3em;
  margin-bottom: 0;
  text-align: center;
  color: black;
  @media (min-width: 800px) {
    font-size: 3em;
  }
  @media (min-width: 900px) {
    font-size: 4em;
  }
`

const useStyles = makeStyles(theme => ({
  header: {
    fontSize: '3.5rem',
    fontWeight: 600,
    marginTop: 20,
    padding: '20px 0 10px 0',
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
  const { allPresentation, allSession, sessionDict } = props

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
      <HeadingText>Lịch trình</HeadingText>
      
      <FilterSection query={query} filter={filter}/>
      <TimelineSection
        allPresentation={allPresentation} 
        allSession={timeSessionList}  
        filter={filter}
        allSubMajor={allSession}
      />
    </div>
  )
}

const mapStateToProps = ({ presentation, }) => {
  return {
    allPresentation: presentation.allPresentation,
    allSession: presentation.allSession,
    sessionDict: presentation.sessionDict,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)