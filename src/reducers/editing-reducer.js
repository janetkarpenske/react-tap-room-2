import * as c from './../actions/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_EDIT:
      console.log("Edit reducer reached.");
      return !state;
  default:
    return state;
  }
};