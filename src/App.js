import './App.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './Components/Navbar';
import ItemCount from "./Components/ItemCount";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';




const App = () => {
  return (
      <><NavBar /><ItemListContainer /><ItemCount /></>
      
      
      
      
  );
  
  
};




export default App;



