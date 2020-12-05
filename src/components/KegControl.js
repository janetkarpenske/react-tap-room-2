import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetails from './KegDetails';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
}
handleClick = () => {
  const { dispatch } = this.props;
  if (this.props.selectedKeg != null) {
    const action1 = a.setKegNull();
    dispatch(action1);
  } else {
  const action = a.toggleForm();
  dispatch(action);
  }
}
handleAddingNewKegToList = (newKeg) => {
  const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
}
handleSelectingKeg = (id) => {
  const { dispatch } = this.props;
  const action = a.selectKeg(id, this.props.masterKegList)
  dispatch(action);
}
handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
    const action1 = a.deleteKeg(id);
    dispatch(action1);
    const action2 = a.setKegNull();
    dispatch(action2);
}
handleBuyingDrink = (id) => {
  const { dispatch } = this.props;
  const action = a.buyDrink(id);
  dispatch(action);
}
handleEditClick = () => {
  const { dispatch } = this.props;
  const action = a.toggleEdit();
  dispatch(action);
}

handleEditingKegInList = (kegToEdit) => {
  const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    const action3 = a.setKegNull();
    dispatch(action3);
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.props.editing) {
    currentlyVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
    buttonText = "Back to List";
  }
  else if (this.props.selectedKeg != null) {
    console.log("CORRECT else statement reached");
    currentlyVisibleState = <KegDetails keg = {this.props.selectedKeg} onClickingBuy= {this.handleBuyingDrink} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
    buttonText = "Back to List";
  }
  else if (this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
    buttonText = "Back To List"
  }
  else {
    currentlyVisibleState =  <KegList kegList={this.props.masterKegList} onKegSelection={this.handleSelectingKeg}/>;
    buttonText = "Add Keg";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button className="btn btn-outline-dark btn-sm" onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  } 
}
KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedKeg: state.selectedKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
