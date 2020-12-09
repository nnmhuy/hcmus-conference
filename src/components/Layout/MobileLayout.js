import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from './components/Logo'
import HideOnScroll from './components/HideOnScroll'
import Sidebar from './components/SideBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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

const MobileLayout = (props) => {
  const classes = useStyles()
  const { children } = props

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)

  const toggleSidebar = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsSidebarOpen(open)
  };

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <div className={classes.leftSection}>
              <IconButton 
                edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                onClick={toggleSidebar(!isSidebarOpen)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.centerSection}>
              <Logo href='/'/>
              <div className={classes.mainTitle}>
                Hội nghị khoa học lần thứ XII - 2020
              </div>
            </div>
            <div className={classes.rightSection}>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default MobileLayout

