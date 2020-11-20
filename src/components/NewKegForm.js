import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm (props) {

  function handleKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, amountLeft: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleKegFormSubmission}>
        <input className="form-control" type='text' name='name' placeholder='Brew Name' required/><br/>
        <input className="form-control" type='text' name='brand' placeholder='Brand Name' required/><br/>
        <div className="row">
          <div className="col-md-6">
            <input className="form-control" type='number' name='price' placeholder='Price' required/><br/>
          </div>
          <div className="col-md-6">
          <input className="form-control" type='number' name='alcoholContent' placeholder='Alcohol Percentage' required/><br/>
          </div>
        </div>
        <button className="btn btn-dark btn-sm" type='submit'>Add Brew</button><br/><br/>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewKegForm;