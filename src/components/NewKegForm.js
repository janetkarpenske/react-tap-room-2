import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm (props) {

  function handleKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleKegFormSubmission}
      buttonText="Add Brew" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;