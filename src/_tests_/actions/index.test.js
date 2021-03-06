import * as actions from './../../actions';
import * as c from './../../actions/actionTypes';

describe('help queue actions', () => {
  it('should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Porter', brand: 'Deschutes', price: 6, alcoholContent: 8, amountLeft: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Porter', 
      brand: 'Deschutes', 
      price: 6, 
      alcoholContent: 8, 
      amountLeft: 124, 
      id: 1
    });
  });
  it('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT
    });
  });
  it('setKegNull should create SET_KEG_NULL action', () => {
    expect(actions.setKegNull()).toEqual({
      type: c.SET_KEG_NULL
    });
  });

});