import * as c from './../actions/actionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, amountLeft, id } = action;
  let tempState;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          amountLeft: amountLeft,
          id: id
        }
      })
    case c.DELETE_KEG:
      tempState = { ...state };
      delete tempState[id];
      return tempState;
    case c.BUY_DRINK:
      console.log("Buy drink reducer reached");
      tempState = {...state};
      let newNumOfDrinks = tempState[id].amountLeft - 1;
      console.log("New Num of Drinks: " + newNumOfDrinks);
      tempState[id].amountLeft = newNumOfDrinks;
      console.log("Temp State: " + tempState);
      return tempState;
    default:
      return state;
  }
}