import { UPDATE_TEXT } from './types';

// Set loading to true
export const updateText = (id, text) => {
  return {
    type: UPDATE_TEXT,
    payload: {
      id,
      text,
    },
  };
};
