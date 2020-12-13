import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LogoWhite from '../../../static/images/logo-white.png'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 45,
    width: 'auto',
  },
}));

const LogoComponent = (props) => {
  const classes = useStyles()

  return (
    <img src={LogoWhite} className={classes.logo} alt='logo-horizontal'/>
  )
}

export default LogoComponent