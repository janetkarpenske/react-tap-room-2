import kegSelectReducer from './../reducers/keg-select-reducer.js';
import * as c from './../actions/actionTypes';

describe('kegListReducer', () => {


  test('Should return default state if no action type is given', () => {
    expect(kegSelectReducer({}, { type: null })).toEqual({});
  });
})