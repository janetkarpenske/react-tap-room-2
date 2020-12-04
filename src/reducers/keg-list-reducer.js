import * as c from './../components/actions/actionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, amountLeft, id } = action;
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
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}