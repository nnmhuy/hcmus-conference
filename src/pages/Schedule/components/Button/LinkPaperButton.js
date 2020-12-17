import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

import colors from '../../../../constants/colors'
import DescriptionIcon from '@material-ui/icons/Description';

const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      color: '#4748D1',
    },
    color: `${colors.primaryBlue}`,
    '& .MuiButton-label': {
      fontSize: '0.8rem',
    },
  },
})(Button);

const LinkPaperButton = (props) => {
  const { paperLink } = props
  if (!paperLink) {
    return null
  }
  return (
    <CustomButton
      color="primary"
      size="small"
      startIcon={
        <IconButton size="small" >
          <DescriptionIcon fontSize="inherit" style={{ color: colors.primaryBlue, width: 'auto', height: 15 }}/>
        </IconButton>}
      href={paperLink}
      target="_blank"
      onClick={(e) => { e.stopPropagation() }}
    >
      PDF bài báo
    </CustomButton>
  )
}

export default LinkPaperButton