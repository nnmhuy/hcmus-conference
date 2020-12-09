import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Logo from '../../../static/images/_logo.png'
import LogoWhite from '../../../static/images/logo-white.png'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 45
  },
}));

const LogoComponent = (props) => {
  const classes = useStyles()

  return (
    <a href='/'>
      <img src={LogoWhite} className={classes.logo} alt='logo-horizontal'/>
    </a>
  )
}

export default LogoComponent