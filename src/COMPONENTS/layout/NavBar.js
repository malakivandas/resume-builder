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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    <div>
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar>
          <ResumeIcon
            classes={{ root: classes.marginRight }}
            fontSize="large"
          />
          <Typography variant="h6" classes={{ root: classes.title }}>
            Resume Builder
          </Typography>
          <Button
            color="inherit"
            classes={{ root: classes.marginRight }}
            component={Link}
            to={'/'}
          >
            Home
          </Button>
          <Button
            color="inherit"
            classes={{ root: classes.marginRight }}
            component={Link}
            to={'/editor'}
          >
            Editor
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  );
};

export default NavBar;
