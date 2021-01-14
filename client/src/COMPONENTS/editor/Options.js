import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// State
import { connect } from 'react-redux';

// Components
import FontSelector from './FontSelector';
import IncludeSection from './IncludeSection';
// import ClearAllText from './ClearAllText';

// MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const Options = ({ resume: { options, fonts, active_sections } }) => {
  return (
    <Fragment>
      {options.map((option) => (
        <Accordion key={option.sectionLabel}>
          <AccordionSummary>
            <Typography variant="h5">{option.sectionLabel}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container direction="column" spacing={2}>
              <IncludeSection
                heading={'Section:'}
                include={active_sections[option.sectionIncludeKey]}
                includeKey={option.sectionIncludeKey}
              />
              {option.subsections.map((subsectionKey) => (
                <Grid key={subsectionKey} item container direction="column">
                  {option.subsections.length > 1 && (
                    <IncludeSection
                      heading={fonts[subsectionKey].label}
                      include={active_sections[subsectionKey]}
                      includeKey={subsectionKey}
                    />
                  )}
                  <FontSelector
                    fontKey={subsectionKey}
                    font={fonts[subsectionKey]}
                  />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <ClearAllText /> */}
    </Fragment>
  );
};

Options.propTypes = {
  resume: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps, {})(Options);
