import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <h2 className="center-align">Drinks</h2>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg
        whenKegIsClicked = { props.onKegSelection }
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        amountLeft={keg.amountLeft}
        id={keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

//We are saying that KegList has one property passed down from KegControl - an array called KegList, which is our masterKegList we passed down. Up above we pass in this property and then tell it to map through it.
KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
