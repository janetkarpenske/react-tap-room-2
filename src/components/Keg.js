import React from 'react';
import PropTypes from 'prop-types';

function Keg (props) {
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.name}, ${props.price} - {props.alcoholContent}%</h3>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string //why is this a string and not a number?
};

export default Keg;