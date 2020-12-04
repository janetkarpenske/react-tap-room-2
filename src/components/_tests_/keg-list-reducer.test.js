import kegListReducer from './../../reducers/keg-list-reducer.js';
import * as c from './../../actions/actionTypes';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    1: {name: 'Porter', 
    brand: 'Deschutes', 
    price: 6, 
    alcoholContent: 8, 
    amountLeft: 124, 
    id: 1 },
    2: {name: 'IPA', 
    brand: 'Elysian', 
    price: 5, 
    alcoholContent: 7, 
    amountLeft: 124, 
    id: 1 }
  }

  const kegData = {
    name: 'Porter', 
    brand: 'Deschutes', 
    price: 6, 
    alcoholContent: 8, 
    amountLeft: 124, 
    id: 1 
  };

  test('Should return default state if no action type is given', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test('Should add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, amountLeft, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      amountLeft: amountLeft,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      amountLeft: amountLeft,
      id: id
      }
    });
});

test('Should successfully delete a keg', () => {
  action = {
    type: c.DELETE_KEG,
    id: 1
  };
  expect(kegListReducer(currentState, action)).toEqual({
    2: {name: 'IPA', 
    brand: 'Elysian', 
    price: 5, 
    alcoholContent: 7, 
    amountLeft: 124, 
    id: 1 }
  });
})
})