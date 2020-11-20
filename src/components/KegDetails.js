import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
  const { keg } = props; //deconstructs the keg object

  return (
    <React.Fragment>
      <h2>{keg.brand}'s {keg.name}</h2>
      <h3><em>Price</em>${keg.price}</h3>
      <h3><em>Alcohol Content</em>{keg.alcoholContent}%</h3>
      <h3>Amount Left (in pints): {keg.amountLeft}</h3>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object
}
export default KegDetails;