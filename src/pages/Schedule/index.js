import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import FilterSection from './components/FilterSection'
import TimelineSection from './components/TimelineSection'

import { getPresentationList } from '../../redux/actions/presentationAction'

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
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
    paddingBottom: 50,
  },
}))

// TODO: filter presentationList
const Schedule = (props) => {
  const { getPresentationListHandler, isLoading, presentationList } = props
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const filter = JSON.parse(query.get('filter')) || { [-1]: true };

  useEffect(() => {
    getPresentationListHandler({ filter })
  }, [location]);

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>Schedule</div>
      <FilterSection query={query} filter={filter}/>
      <TimelineSection presentationList={presentationList}/>
    </div>
  )
}


const mapStateToProps = ({ presentation, }) => {
  return {
    isLoading: presentation.isLoading,
    presentationList: presentation.presentationList,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getPresentationListHandler: getPresentationList,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)