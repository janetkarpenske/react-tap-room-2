import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetails from './KegDetails';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    formVisibleOnPage: false,
    masterKegList: [],
    selectedKeg: null
  };
}

handleClick = () => {
  if (this.state.selectedKeg != null) {
    this.setState({
      formVisibleOnPage:false,
      selectedKeg: null
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

render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.selectedKeg != null) {
    currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg}/>
    buttonText = "Back to List";
  }
  else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
    buttonText = "Add Brew"
  }
  else {
    currentlyVisibleState =  <KegList kegList={this.state.masterKegList} onKegSelection={this.handleSelectingKeg}/>;
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
