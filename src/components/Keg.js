import React from 'react';
import PropTypes from 'prop-types';

function Keg (props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegIsClicked(props.id)}>
        <h3>{props.brand} - {props.name}, ${props.price}</h3>
        <h4>Alcohol Content: {props.alcoholContent}% - Amount Left: {props.amountLeft} Pints</h4> 
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  amountLeft: PropTypes.number,
  id: PropTypes.string, //why is this a string and not a number?
  whenKegIsClicked: PropTypes.func
};

export default Keg;