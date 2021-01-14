import React from 'react';

// State
import { connect } from 'react-redux';
import { updateFont } from '../../ACTIONS/resumeActions';

// MUI
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FontSelector = ({ fontKey, font, fontHeading, updateFont }) => {
  const handleChange = (e) => {
    updateFont(fontKey, e.target.name, e.target.value);
  };

  const handleToggle = (e) => {
    updateFont(fontKey, e.target.name, e.target.checked);
  };

  var sizes = [];
  for (var i = 8; i <= 50; i++) {
    sizes.push(i);
  }

  return (
    <Grid item container direction="column">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Family</InputLabel>
        <Select value={font.family} name="family" onChange={handleChange}>
          <MenuItem value={'Montserrat'}>Montserrat</MenuItem>
          <MenuItem value={'Tinos'}>Tinos</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select value={font.size} name="size" onChange={handleChange}>
          {sizes.map((fontSize) => (
            <MenuItem value={fontSize} key={fontSize}>
              {fontSize}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select value={font.color} name="color" onChange={handleChange}>
          <MenuItem value={'red'}>Red</MenuItem>
          <MenuItem value={'black'}>Black</MenuItem>
          <MenuItem value={'blue'}>Blue</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox name="bold" checked={font.bold} onChange={handleToggle} />
        }
        label="Bold"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="italic"
            checked={font.italic}
            onChange={handleToggle}
          />
        }
        label="Italic"
      />
    </Grid>
  );
};

export default connect(null, { updateFont })(FontSelector);
