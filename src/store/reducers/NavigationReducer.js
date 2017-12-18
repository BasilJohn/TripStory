import { SET_NAVIGATION_PROPS } from "../actions/types";

const INITIAL_STATE = { navigation: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAVIGATION_PROPS:
      return { ...state, navigator: action.payload };
    default:
      return state;
  }
};
