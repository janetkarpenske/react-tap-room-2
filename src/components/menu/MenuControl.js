import React from 'react';
import MenuList from './MenuList';

class MenuControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      menuVisibleOnPage: true
    };
  }

  render(){   
    
    return (
      <React.Fragment>
        <MenuList />
      </React.Fragment>
    )
  }
}

export default MenuControl;