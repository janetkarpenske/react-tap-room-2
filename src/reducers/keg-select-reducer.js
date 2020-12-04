import * as c from './../components/actions/actionTypes';
import kegListReducer from './keg-list-reducer';

export default (state = null, action) => {
  const { id } = action;
  let tempSelectedKeg;
  switch (action.type) {
  case c.SELECT_KEG:
    console.log("Keg selection reducer reached.");
    // tempState = {...state};
    // const newNumberOfDrinks = tempState[id].amountLeft - 1;
    // tempState[id].amountLeft = newNumberOfDrinks;
    // return tempState;
    if (id == 'null') {
      tempSelectedKeg = null;
    }
    else {
      const tempSelectedKeg = kegListReducer[id];
      console.log("This keg was selected: " + tempSelectedKeg);
    }
    return tempSelectedKeg;
  default:
    return state;
  }
};