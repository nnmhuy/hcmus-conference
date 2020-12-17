import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import { navBarItems } from '../constants'
import colors from '../../../constants/colors'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  active_item: {
    background: colors.primaryLight,
    color: colors.primaryContrastText,
    '& span': {
      fontWeight: 'bold',
    }
  }
});

const SideBar = (props) => {
  const classes = useStyles();
  const { isSidebarOpen, toggleSidebar } = props

  return (
    <Drawer anchor={'left'} open={isSidebarOpen} onClose={toggleSidebar(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleSidebar(false)}
        onKeyDown={toggleSidebar(false)}
      >
        <List>
          {
            navBarItems.map(item => {
              const { name, path } = item
              return (
                <ListItem button
                  component="a"
                  key={name}
                  color="inherit"
                  href={path}
                  className={classes.sidebar_item}
                >
                  <p style={{margin: 0}}>{name}</p>
                </ListItem>
              )
            })
          }
        </List>
        <Divider />
        <List>
          
        </List>
      </div>
    </Drawer>
  );
}

export default SideBar
