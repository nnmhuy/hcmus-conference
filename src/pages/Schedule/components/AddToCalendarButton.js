import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

import AddToCalendarIcon from '../../../static/images/add-calendar-icon.svg'

const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      color: '#4748D1',
    },
    color: '#4041D2',
    '& .MuiButton-label': {
      fontSize: 10,
    },
  },
})(Button);


const AddToCalendarButton = (props) => {
  const { title, author, description, startDate, endDate, linkZoom } = props
  let event = {
    title: `${title} (${author})`,
    description,
    location: linkZoom,
    startTime: startDate,
    endTime: endDate,
  };

  return (
    <CustomButton
      color="primary"
      size="small"
      startIcon={
        <IconButton size="small" >
          <img src={AddToCalendarIcon} style={{ width: 'auto', height: 15 }} alt="zoom-icon"/>
        </IconButton>}
      href={linkZoom}
      target="_blank"
      onClick={(e) => { e.stopPropagation() }}
    >
      Thêm vào lịch
    </CustomButton>
  )
}

export default AddToCalendarButton