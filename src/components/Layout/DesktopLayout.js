import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './components/Logo'
import HideOnScroll from './components/HideOnScroll'
import NavBarItems from './components/NavBarItems'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
  },
  centerSection: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white'
  },
  appBar: {
    // backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, black)`,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  mainTitle: {
    display: 'inline-block',
    fontWeight: 600,
    marginLeft: 15,
    textTransform: 'uppercase'
  },
  mainContainer: {
  }
}));

const DesktopLayout = (props) => {
  const classes = useStyles()
  const { children, themeColor } = props

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} style={{background: themeColor ? '#4053EB' : 'transparent'}}>
          <Toolbar>
            <div className={classes.leftSection}>
              <Logo href='/'/>
            </div>
            <div className={classes.centerSection}>
              <div className={classes.mainTitle}>
                Hội nghị khoa học lần thứ XII - 2020
              </div>
            </div>
            <div className={classes.rightSection}>
              <NavBarItems/>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default DesktopLayout
