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
  const { applicant_name, projects, fonts, active_sections, text } = resume;

  return (
    <Fragment>
      {/* Applicant Name */}
      {active_sections.applicant_name && (
        <Input
          textKey={applicant_name}
          text={text[applicant_name]}
          font={fonts.applicant_name}
        />
      )}
      <Divider />
      {/* Projects */}
      {active_sections.projects &&
        projects.allIds.map((projectId) => {
          return (
            <Fragment key={projects[projectId].title}>
              {active_sections.project_title && (
                <Input
                  textKey={projects[projectId].title}
                  text={text[projects[projectId].title]}
                  font={fonts.project_title}
                />
              )}
              {active_sections.project_description &&
                projects[projectId].text.map((textKey) => (
                  <Input
                    key={textKey}
                    textKey={textKey}
                    text={text[textKey]}
                    font={fonts.project_description}
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
