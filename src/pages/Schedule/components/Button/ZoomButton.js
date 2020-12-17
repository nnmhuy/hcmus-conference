import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

import EnterRoomIcon from '../../../../static/images/enter-room-icon.svg'
import colors from '../../../../constants/colors'

const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    padding: 0,
    '&:hover': {
      color: '#4748D1',
    },
    color: `${colors.primaryBlue}`,
    '& .MuiButton-label': {
      fontSize: '0.8rem',
    },
  },
})(Button);

const ZoomButton = (props) => {
  const { linkZoom, size="small", variant, style = {} } = props
  if (!linkZoom) {
    return null
  }
  return (
    <CustomButton
      color="primary"
      size={size}
      variant={variant}
      startIcon={
        <IconButton size="small" >
          <img src={EnterRoomIcon} style={{ width: 'auto', height: 15 }} alt="zoom-icon"/>
        </IconButton>}
      href={linkZoom}
      target="_blank"
      onClick={(e) => { e.stopPropagation() }}
      style={style}
    >
      Vào phòng Zoom
    </CustomButton>
  )
}

export default ZoomButton