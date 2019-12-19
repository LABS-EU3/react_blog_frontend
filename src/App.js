import React from "react";
import Home from "./pages/LandingPage";
import Register from './pages/Register';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => <Home {...props} />}/>
      <Route exact path='/register' component={Register}/>
    </div>
  );
}
export default App;
