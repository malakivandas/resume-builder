import React from 'react';

// State
import { connect } from 'react-redux';
import { clearAllText } from '../../ACTIONS/resumeActions';

// MUI
import makeStyles from '@material-ui/core/styles/makeStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const ClearAllText = ({ clearAllText }) => {
  const classes = useStyles();

  const handleClick = () => {
    clearAllText();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      classes={{ root: classes.button }}
      size="large"
      onClick={handleClick}
    >
      Clear All Text
    </Button>
  );
};

export default connect(null, { clearAllText })(ClearAllText);
