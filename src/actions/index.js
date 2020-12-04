import * as c from './actionTypes';

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, amountLeft, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    amountLeft: amountLeft,
    id: id
  }
}

export const buyDrink = id => ({
  type: 'BUY_DRINK',
  id
});

export const selectKeg = (id,kegList) => {
  return {
    type: c.SELECT_KEG,
    id: id,
    kegList: kegList
  };
};
export const setKegNull = () => {
  return {
    type: c.SET_KEG_NULL    
  };
};