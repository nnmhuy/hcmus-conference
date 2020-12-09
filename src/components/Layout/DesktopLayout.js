import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from './components/Logo'
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
    position: 'fixed'
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
  const { curPath } = props
  const [themeColor, setTheme] = useState(true)  

  

  useEffect(() => {
    const listenScrollEvent = e => {
      if (curPath === '/') {
        setTheme(false)
        if (window.scrollY > 100) {
          setTheme(true)
        }
      }
    }
    if (curPath === '/') {
      window.addEventListener('scroll', listenScrollEvent)
      return () => {
        window.removeEventListener('scroll', listenScrollEvent)
      }
    }
  }, [curPath])

  useEffect(() => {
    console.log(curPath)
  }, [curPath])

  const classes = useStyles()
  const { children } = props

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} style={{background: themeColor ? '#4053EB' : 'transparent'}}>
        <Toolbar>
          <div className={classes.leftSection}>
            <Logo href='/'/>
            <div className={classes.mainTitle}>
              Hội nghị khoa học<br/>lần thứ XII - 2020
            </div>
          </div>
          <div className={classes.centerSection}>
            
          </div>
          <div className={classes.rightSection}>
            <NavBarItems/>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default DesktopLayout
