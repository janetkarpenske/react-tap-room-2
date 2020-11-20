import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegDetails from './KegDetails';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    formVisibleOnPage: false,
    masterKegList: [],
    selectedKeg: null,
    editing: false
  };
}
handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      formVisibleOnPage:false,
      selectedKeg: null,
      editing: false
    });
  } else {
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
  }
}
handleAddingNewKegToList = (newKeg) => {
  const tempMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: tempMasterKegList,
  formVisibleOnPage: false});
}
handleSelectingKeg = (id) => {
  const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
  this.setState({
    selectedKeg: selectedKeg
  })
}
handleDeletingKeg = (id) => {
  const tempMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  this.setState({
    masterKegList: tempMasterKegList,
    selectedKeg: null
  })
}
handleBuyingDrink = (id) => {
  console.log("Drink was bought");
  const tempMasterKegList = this.state.masterKegList;
  tempMasterKegList.map((keg) => {
    if(keg.id == id && keg.amountLeft > 0) {
      keg.amountLeft = keg.amountLeft - 1;
    }
    else if (keg.id == id && keg.amountLeft <= 0) {
      keg.quantity = "Sorry, Out Of Stock";
    }
    return keg;
  })
  this.setState ({
    masterKegList: tempMasterKegList
  })
}
handleEditClick = () => {
  this.setState({editing: true});
}
handleEditingKegInList = (kegToBeEdited) => {
  const tempMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id.concat(kegToBeEdited));
  this.setState({
    masterKegList: tempMasterKegList,
    editing: false,
    selectedTicket: null
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
  else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
    buttonText = "Back To List"
  }
  else {
    currentlyVisibleState =  <KegList kegList={this.state.masterKegList} onKegSelection={this.handleSelectingKeg}/>;
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

export default KegControl;
