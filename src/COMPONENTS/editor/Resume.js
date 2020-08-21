import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// State
import { connect } from 'react-redux';
import { updateText } from '../../ACTIONS/resumeActions';

// Components
import Input from './Input';

// MUI
// import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const Resume = ({ resume }) => {
  return (
    <Fragment>
      <Input
        textId={resume.full_name}
        text={resume.text[resume.full_name]}
        font={resume.fonts.full_name}
        label={resume.labels.full_name}
      />
      <Divider />
      {resume.projects.map((project) => {
        return (
          <Fragment key={project.title}>
            <Input
              textId={project.title}
              text={resume.text[project.title]}
              font={resume.fonts.project_title}
              label={resume.labels.project_title}
            />
            {project.text.map((textId) => (
              <Input
                key={textId}
                textId={textId}
                text={resume.text[textId]}
                font={resume.fonts.project_description}
                label={resume.labels.project_description}
              />
            ))}
          </Fragment>
        );
      })}
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
