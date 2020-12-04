import rootReducer from './../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import kegListReducer from './../../reducers/keg-list-reducer';
import * as c from './../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is specified', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false
    });
  });
  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'Porter', 
      brand: 'Deschutes', 
      price: 6, 
      alcoholContent: 8, 
      amountLeft: 124, 
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});