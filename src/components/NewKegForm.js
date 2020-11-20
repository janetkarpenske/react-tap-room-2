import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm (props) {

  function handleKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleKegFormSubmission}>
        <input type='text' name='name' placeholder='Brew Name'/>
        <input type='text' name='brand' placeholder='Brand Name'/>
        <input type='text' name='price' placeholder='Price'/>
        <input type='text' name='alcoholContent' placeholder='Alcohol Percentage'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;