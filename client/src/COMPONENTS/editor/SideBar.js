import React, { Fragment } from 'react';

// Components
import Options from './Options';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 'var(--drawer-width)',
    flexShrink: 0,
  },
  drawerPaper: {
    width: 'var(--drawer-width)',
  },
}));

const SideBar = ({ open, drawerWidth }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Drawer
        classes={{ root: classes.drawer, paper: classes.drawerPaper }}
        variant="persistent"
        anchor="left"
        open={open}
        style={{ '--drawer-width': `${drawerWidth}px` }}
      >
        <Toolbar />
        <Options />
      </Drawer>
    </Fragment>
  );
};

export default SideBar;
