import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm (props) {
  const { keg } = props;

  function handleEditSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: keg.amountLeft, id: keg.id})
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler = {handleEditSubmission} buttonText="Update Keg"/>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;