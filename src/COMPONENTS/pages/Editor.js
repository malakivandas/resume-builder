import React, { useState } from 'react';

// Components
import SideBar from '../resume/SideBar';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const Editor = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <SideBar open={drawer} drawerWidth={drawerWidth} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawer,
        })}
      >
        <Grid container>
          <Grid item xs={0} sm={2}>
            <IconButton onClick={toggleDrawer}>
              {drawer ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
            >
              {' '}
              Hello{' '}
            </div>
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Editor;
