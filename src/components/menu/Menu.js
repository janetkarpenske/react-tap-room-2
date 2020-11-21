import React from "react";
import PropTypes from "prop-types";

function Menu(props){
  return (
    <React.Fragment>
      
      <h4><strong>{props.foodName} <div className="align-right">{props.price}</div></strong></h4><br/>
      <hr/>
    </React.Fragment>
  );
}

Menu.propTypes = {
  foodName: PropTypes.string,
  price: PropTypes.number
};
export default Menu;