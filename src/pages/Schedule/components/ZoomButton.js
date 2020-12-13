import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

import ZoomIcon from '../../../static/images/zoom-icon.png'
import EnterRoomIcon from '../../../static/images/enter-room-icon.svg'

const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      color: '#4748D1',
    },
    color: '#4041D2',
    '& .MuiButton-label': {
      fontSize: '0.8rem',
    },
  },
})(Button);

const ZoomButton = (props) => {
  const { linkZoom } = props
  return (
    <CustomButton
      color="primary"
      size="small"
      startIcon={
        <IconButton size="small" >
          <img src={EnterRoomIcon} style={{ width: 'auto', height: 15 }} alt="zoom-icon"/>
        </IconButton>}
      href={linkZoom}
      target="_blank"
      onClick={(e) => { e.stopPropagation() }}
    >
      Vào phòng Zoom
    </CustomButton>
  )
}

export default ZoomButton