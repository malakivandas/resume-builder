import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  // accordianDetails: {
  //   flexDirection: 'column',
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Option = ({ title, stateKey }) => {
  const classes = useStyles();

  const [family, setFamily] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [style, setStyle] = useState('');

  const handleChange1 = (event) => {
    setFamily(event.target.value);
  };

  const handleChange2 = (event) => {
    setSize(event.target.value);
  };

  const handleChange3 = (event) => {
    setColor(event.target.value);
  };

  const handleChange4 = (event) => {
    setStyle(event.target.value);
  };

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h5">{title}</Typography>
      </AccordionSummary>
      {/* <AccordionDetails classes={{ root: classes.accordianDetails }}> */}
      <AccordionDetails>
        <Grid container direction="column">
          <Typography variant="h6">Font</Typography>
          <FormControl classes={{ root: classes.formControl }}>
            <InputLabel id="demo-simple-select-label">Family</InputLabel>
            <Select value={family} onChange={handleChange1}>
              <MenuItem value={'Monserrat'}>Monserrat</MenuItem>
              <MenuItem value={'Tinos'}>Tinos</MenuItem>
            </Select>
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select value={size} onChange={handleChange2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                (fontSize) => (
                  <MenuItem value={fontSize} key={fontSize}>
                    {fontSize}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select value={color} onChange={handleChange3}>
              <MenuItem value={'red'}>Red</MenuItem>
              <MenuItem value={'white'}>White</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
            </Select>
          </FormControl>
          <FormControl classes={{ root: classes.formControl }}>
            <InputLabel id="demo-simple-select-label">Style</InputLabel>
            <Select value={style} onChange={handleChange4}>
              <MenuItem value={'regular'}>Regular</MenuItem>
              <MenuItem value={'bold'}>Bold</MenuItem>
              <MenuItem value={'italic'}>Italic</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Option;
