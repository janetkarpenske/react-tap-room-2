import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
  const { keg, onClickingBuy, onClickingDelete, onClickingEdit } = props; //deconstructs the keg object

  return (
    <React.Fragment>
      <h3><strong>{keg.brand}'s {keg.name}</strong></h3>
      <h4>${keg.price}</h4>
      <h4><em>Alcohol Content </em>{keg.alcoholContent}%</h4>
      <h4>Amount Left in Stock(in pints): {keg.amountLeft}</h4>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingBuy(keg.id) }>Buy</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingDelete(keg.id) }>Delete Brew</button>
      <button className="btn btn-outline-dark btn-sm" onClick={ () => onClickingEdit(keg.id) }>Edit Brew</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}
export default KegDetails;