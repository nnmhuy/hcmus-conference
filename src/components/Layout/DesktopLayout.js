import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
  },
  appBar: {
    background: theme.palette.primary.lighter,
    boxShadow: 'none'
  },
  mainTitle: {
    display: 'inline-block'
  },
  mainContainer: {
  }
}));

const DesktopLayout = (props) => {
  const classes = useStyles()
  const { children } = props

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
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
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default DesktopLayout