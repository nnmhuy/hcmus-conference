import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';
import { filter, get, } from 'lodash'
import moment from 'moment'

import NoData from '../../../static/images/empty-box@2x.png'
import PresentationItem from './PresentationItem'
import SubMajorItem from './SubMajorItem'
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90vh',
    overflow: "scroll",
  },
  timelineRoot: {
    padding: 0,
    margin: 0,
  },
}))

const NoDataImage = styled.img`
  width: 50px;
  height: auto;
  display: block;
  margin: 0 auto 10px auto;
`
const NoDataContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 60px 0;
  color: gray;
`


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
          filteredSubMajor.length !== 0 && filteredSubMajor.map((subMajor, index) => {
            return (
              <SubMajorItem 
                key={`presentation-item-${index}-${subMajor.id}`} 
                presentationList={allPresentation[subMajor.sessionId]}
                subMajor={subMajor}
              />
            )
          })
        }
        {
          filteredSubMajor.length === 0 && <NoDataContainer>
            <NoDataImage src={NoData}></NoDataImage>
            <p>Không có dữ liệu</p>
          </NoDataContainer>
        }
      </Timeline>
    </div>
  );
}

export default MajorPresentationList