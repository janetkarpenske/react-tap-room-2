import * as c from './../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECT_KEG:
    console.log("Keg selection reducer reached.");
      const tempSelectedKeg = action.kegList[action.id] //.filter(keg => keg.id === action.id)[0];
      return tempSelectedKeg;
      // const tempSelectedKeg = rootReducer.masterKegList[id];
      // console.log("MAYBE: " + this.store.masterKegList[id]);
      // console.log("This keg was selected: " + tempSelectedKeg);
  case 'SET_KEG_NULL':    
    state = null;
    return state;
  default:
    return state;
  }
};