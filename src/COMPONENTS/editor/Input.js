import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// State
import { connect } from 'react-redux';
import { updateText } from '../../ACTIONS/resumeActions';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  InputRoot: {
    // For keeping hover border when value !== ''
    '&:hover:not($focused) $notchedOutlineWithText': {
      borderWidth: '1px',
    },
  },
  notchedOutlineWithText: {
    borderWidth: '0',
  },
  InputLabelRootWithTextNonHover: {
    '&:not($focused)': {
      display: 'none',
    },
  },
  regularProperties: {},
  focused: {},
}));

const Input = ({ id, text, font, label, updateText }) => {
  const classes = useStyles();

  const [value, setValue] = useState(text);
  const [hover, setHover] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFocusOut = () => {
    updateText(id, value);
  };

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <TextField
      variant="outlined"
      value={value}
      label={label}
      fullWidth
      onChange={onChange}
      onBlur={onFocusOut}
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
      InputProps={{
        classes: {
          root: classes.InputRoot,
          focused: classes.focused,
          notchedOutline: value
            ? classes.notchedOutlineWithText
            : classes.regularProperties,
        },
      }}
      InputLabelProps={{
        classes: {
          root: !value
            ? classes.regularProperties
            : hover
            ? classes.regularProperties
            : classes.InputLabelRootWithTextNonHover,
          focused: classes.focused,
        },
      }}
    ></TextField>
  );
};

export default connect(null, { updateText })(Input);
