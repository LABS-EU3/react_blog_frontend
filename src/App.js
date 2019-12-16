import React from "react";
import { Route, Link, Router } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return <div>
    <div className="App">
      
      Welcome to our blog publishing platform

      </div>;
  
      <Route path="/login" component={Login} />

  </div>
}

export default App;
