import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetails from './KegDetails';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    selectedKeg: null,
    editing: false
  };
}
handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      selectedKeg: null,
      editing: false
    });
  } else {
  const { dispatch } = this.props;
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
  const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
}
handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
}
handleBuyingDrink = (id) => {
  // const { dispatch } = this.props;
  //   const action = {
  //     type: "BUY_DRINK",
  //     id: id
  //   };
  //   dispatch(action);

  // console.log("Drink was bought");
  const { dispatch } = this.props;
  const action = a.buyDrink(id);
  dispatch(action);


  // const tempMasterKegList = this.state.masterKegList;
  // tempMasterKegList.map((keg) => {
  //   if(keg.id === id && keg.amountLeft > 0) {
  //     keg.amountLeft = keg.amountLeft - 1;
  //   }
  //   else if (keg.id === id && keg.amountLeft <= 0) {
  //     keg.quantity = "Sorry, Out Of Stock";
  //   }
  //   return keg;
  // })
  // this.setState ({
  //   masterKegList: tempMasterKegList
  // })
}
handleEditClick = () => {
  this.setState({editing: true});
}

handleEditingKegInList = (kegToEdit) => {
  const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
  });
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.editing) {
    currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
    buttonText = "Back to List";
  }
  else if (this.state.selectedKeg != null) {
    currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} onClickingBuy= {this.handleBuyingDrink} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
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
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
