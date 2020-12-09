import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

import { navBarItems } from '../constants'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  nav_bar_item: {
    marginRight: 20,
    height: 60,
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  active_item: {

  }
}));

const NavBarItem = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {
        navBarItems.map(item => {
          const { name, path } = item
          return (
            <Button 
              key={name} 
              // color="primary"
              className={classes.nav_bar_item}
              href={path}
            >
              {name}
            </Button>
          )
        })
      }
    </div>
  )
}

export default NavBarItem