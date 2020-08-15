import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ResumeIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  marginRight: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <ResumeIcon className={classes.marginRight} fontSize="large" />
          <Typography variant="h6" className={classes.title}>
            Resume Builder
          </Typography>
          <Button
            color="inherit"
            className={classes.marginRight}
            component={Link}
            to={'/'}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.marginRight}
            component={Link}
            to={'/editor'}
          >
            Editor
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
};

export default NavBar;
