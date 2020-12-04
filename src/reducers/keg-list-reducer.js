import * as c from './../components/actions/actionTypes';

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
    // case c.BUY_DRINK:
      // console.log("Buy drink reducer reached");
      // tempState = {...state};
      // let newNumOfDrinks = tempState[id].amountLeft - 1;
      // console.log("New Num of Drinks: " + newNumOfDrinks);
      // tempState[id].dislikes = newNumOfDrinks;
      // console.log("Temp State: " + tempState);
      // return tempState;
    case 'BUY_DRINK':
      tempState = {...state};
      const newNumberOfDrinks = tempState[id].amountLeft - 1;
      tempState[id].amountLeft = newNumberOfDrinks;
      return tempState;
    default:
      return state;
  }
}