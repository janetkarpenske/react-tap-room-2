import * as c from './../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECT_KEG:
    console.log("Keg selection reducer reached.");
      const tempSelectedKeg = action.kegList[action.id]
      return tempSelectedKeg;

  case 'SET_KEG_NULL':    
    state = null;
    return state;
  default:
    return state;
  }
};