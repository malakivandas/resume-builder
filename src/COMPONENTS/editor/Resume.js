import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// State
import { connect } from 'react-redux';
import { updateText } from '../../ACTIONS/resumeActions';

// Components
import Input from './Input';

// MUI
import Grid from '@material-ui/core/Grid';

const Resume = ({ resume }) => {
  return (
    <Fragment>
      <Grid item>
        <Input
          id={resume.full_name}
          text={resume.text[resume.full_name]}
          font={resume.fonts.full_name}
          label={resume.labels.full_name}
        />
      </Grid>
    </Fragment>
  );
};

Resume.propTypes = {
  resume: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps, { updateText })(Resume);
