import { TOGGLE_LANGUAGE } from './actions';

export const reducer = (state, { type }) => {
  const newLanguage = !state.language;
  switch (type) {
    case TOGGLE_LANGUAGE: {
      return {
        ...state,
        language: newLanguage,
      };
    }
    default:
      return state;
  }
};
