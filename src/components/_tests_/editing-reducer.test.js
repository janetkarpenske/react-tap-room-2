import editingReducer from './../../reducers/editing-reducer';
import * as c from './../actions/ActionTypes';

describe("editingReducer", () => {

  test('Should toggle editing on and off', () => {
    expect(editingReducer(false, { type: c.TOGGLE_EDIT })).toEqual(true);
  });

});