import { UPDATE_TEXT } from '../ACTIONS/types';
import { resumeState } from './resumeState';

export default (state = resumeState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: {
          ...state.text,
          [action.payload.id]: action.payload.text,
        },
      };
    default:
      return state;
  }
};
