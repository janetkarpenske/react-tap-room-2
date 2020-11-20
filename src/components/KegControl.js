import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    formVisibleOnPage: false,
    masterKegList: [{name: "Black Butte Porter", brand: "Deschutes", price: "6", alcoholContent: "8", id: "1"}]
  };
}

handleClick = () => {
  console.log("Twas clicked");
  this.setState(prevState => ({
    formVisibleOnPage: !prevState.formVisibleOnPage
  }));
}

handleAddingNewKegToList = (newKeg) => {
  const tempMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: tempMasterKegList,
  formVisibleOnPage: false});
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
    buttonText = "Add Brew"
  }
  else {
    currentlyVisibleState =  <KegList kegList={this.state.masterKegList} />;
    buttonText = "Add another Keg";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  } 
}

export default KegControl;
