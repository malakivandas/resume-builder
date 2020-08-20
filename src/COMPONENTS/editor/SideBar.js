import React, { Fragment } from 'react';

// Components
import Options from './Options';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

const SideBar = ({ open, drawerWidth }) => {
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <Options />
        <Divider />
      </Drawer>
    </Fragment>
  );
};

export default SideBar;
