
import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"; 
import MenuControl from "./menu/MenuControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <div className="container">
      
      <div className="row">
        <div className="col-md-6">
          <KegControl />
        </div>
        <div className="col-md-6">
        <MenuControl />
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
