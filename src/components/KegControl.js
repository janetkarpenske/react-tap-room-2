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
    // selectedKeg: null,
  };
}
handleClick = () => {
  if (this.props.selectedKeg != null) {
    // this.setState({
    //   selectedKeg: null,
    // });
    const { dispatch } = this.props;
    const action = a.selectKeg('null'); //do I need to pass in an id?
    dispatch(action);
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
  const { dispatch } = this.props;
  const action = a.selectKeg(id)
  dispatch(action);
  // const selectedKeg = this.props.masterKegList[id];
  //   this.setState({selectedKeg: selectedKeg});
}
handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
    const action1 = a.deleteKeg(id);
    dispatch(action1);
    const action2 = a.selectKeg('null');
    dispatch(action2);
    // this.setState({selectedKeg: null});
}
handleBuyingDrink = (id) => {
  const { dispatch } = this.props;
    const action = {
      type: "BUY_DRINK",
      id: id
    };
    dispatch(action);

  // console.log("Drink was bought");
  // const { dispatch } = this.props;
  // const action = a.buyDrink(id);
  // dispatch(action);


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
    this.setState({
      selectedKeg: null
  });
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.props.editing) {
    currentlyVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
    buttonText = "Back to List";
  }
  else if (this.props.selectedKeg != null) {
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
  selectedKeg: PropTypes.string
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedKeg: state.selectKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
