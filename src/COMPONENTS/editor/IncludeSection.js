import React from 'react';

// State
import { connect } from 'react-redux';
import { updateIncludeSection } from '../../ACTIONS/resumeActions';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const IncludeSection = ({
  heading,
  include,
  includeKey,
  updateIncludeSection,
}) => {
  const handleToggle = (e) => {
    updateIncludeSection(includeKey, e.target.checked);
  };

  return (
    <Grid item container alignItems="center">
      <Grid item>
        <Typography variant="subtitle1">{heading}</Typography>
      </Grid>
      <Grid item>
        <Switch checked={include} onChange={handleToggle} />
      </Grid>
    </Grid>
  );
};

export default connect(null, { updateIncludeSection })(IncludeSection);
