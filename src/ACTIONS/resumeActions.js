import {
  UPDATE_TEXT,
  UPDATE_FONT,
  UPDATE_INCLUDE_SECTION,
  CLEAR_ALL_TEXT,
} from './types';

// Update Text
export const updateText = (textKey, text) => {
  return {
    type: UPDATE_TEXT,
    payload: {
      textKey,
      text,
    },
  };
};

// Update Font Family
export const updateFont = (fontKey, property, value) => {
  return {
    type: UPDATE_FONT,
    payload: {
      fontKey,
      property,
      value,
    },
  };
};

// Include/Exclude Section or Subsection
export const updateIncludeSection = (includeKey, value) => {
  return {
    type: UPDATE_INCLUDE_SECTION,
    payload: {
      includeKey,
      value,
    },
  };
};

// Clear All Text
export const clearAllText = () => {
  return {
    type: CLEAR_ALL_TEXT,
  };
};
