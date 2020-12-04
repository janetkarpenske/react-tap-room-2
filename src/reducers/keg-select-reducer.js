import * as c from './../components/actions/actionTypes';
import rootReducer from './index';


export default (state = null, action) => {
  const { name, brand, price, alcoholContent, amountLeft, id } = action;
  console.log("ACTION: " + action.id);
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
      
      const tempSelectedKeg = rootReducer.masterKegList[id];
      console.log("MAYBE: " + this.store.masterKegList[id]);
      console.log("This keg was selected: " + tempSelectedKeg);
    }
    return tempSelectedKeg;
  default:
    return state;
  }
};