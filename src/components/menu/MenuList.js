import React from "react";
import Menu from "./Menu";

const menu = [  
  {  
     foodName: "Fiona's Reuben",
     price: 12,
  },
  {  
    foodName: "Schmancy BLT",
    price: 10,
 },{  
  foodName: "Irish Fish & Chips",
  price: 15,
},{  
  foodName: "Bangers and Mash",
  price: 11,
},{  
  foodName: "Caesar Salad",
  price: 10,
}
 ];

 function MenuList(){
  return (
    <React.Fragment>
      <h2 className="center-align">Menu</h2>
      <hr/>
      {menu.map((menu, index) =>
        <Menu 
           foodName={menu.foodName}
           price={menu.price}
           key={index}/>
      )}
    </React.Fragment>
  );
}

export default MenuList;