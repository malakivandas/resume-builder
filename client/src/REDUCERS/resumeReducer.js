import {
  UPDATE_TEXT,
  UPDATE_FONT,
  UPDATE_INCLUDE_SECTION,
  CLEAR_ALL_TEXT,
} from '../ACTIONS/types';
import { resumeState } from './resumeState';

export default (state = resumeState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: {
          ...state.text,
          [action.payload.textKey]: action.payload.text,
        },
      };
    case UPDATE_FONT:
      return {
        ...state,
        fonts: {
          ...state.fonts,
          [action.payload.fontKey]: {
            ...state.fonts[action.payload.fontKey],
            [action.payload.property]: action.payload.value,
          },
        },
      };
    case UPDATE_INCLUDE_SECTION:
      return {
        ...state,
        active_sections: {
          ...state.active_sections,
          [action.payload.includeKey]: action.payload.value,
        },
      };
    case CLEAR_ALL_TEXT:
      return {
        ...state,
        text: {},
      };
    default:
      return state;
  }
};
