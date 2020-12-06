import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Logo from '../../../static/images/logo.png'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 50
  },
}));

const LogoComponent = (props) => {
  const classes = useStyles()

  return (
    <a href='/'>
      <img src={Logo} className={classes.logo} alt='logo-horizontal'/>
    </a>
  )
}

export default LogoComponent