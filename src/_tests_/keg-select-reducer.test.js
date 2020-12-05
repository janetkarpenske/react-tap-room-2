import kegSelectReducer from './../reducers/keg-select-reducer.js';
import * as c from './../actions/actionTypes';

describe('kegListReducer', () => {
  let action;
  const sampleState = {
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
    expect(kegSelectReducer({}, { type: null })).toEqual({});
  });


})