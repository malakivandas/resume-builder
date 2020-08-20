import { combineReducers } from 'redux';

// Reducers
import resumeReducer from './resumeReducer';

export default combineReducers({
  resume: resumeReducer,
});
