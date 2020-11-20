import React from 'react';
import KegList from './KegList';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    formVisibleOnPage: false,
    masterKegList: []
  };
}

render() {
  let currentlyVisibleState = null;
  let buttonText = null;

  currentlyVisibleState =  <KegList kegList={this.state.masterKegList} />;
  buttonText = "Add another Keg";

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  } 
}

export default KegControl;
