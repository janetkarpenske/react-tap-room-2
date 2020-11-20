import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg

        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        id={keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

//We are saying that KegList has one property passed down from KegControl - an array called KegList, which is our masterKegList we passed down. Up above we pass in this property and then tell it to map through it.
KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
