import React, { useState } from "react";
import Modal from "./pages/Modal";
import LandingPage from "./pages/LandingPage";
import Register from './pages/Register';
import Login from "./pages/Login";
import {Route} from 'react-router-dom';

function App() {
  const [registerOpen, setRegisterOpen] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = e => {
    if (e.target.id === "register") {
      setRegisterOpen(true);
    } else if (e.target.id === "login") {
      setLoginOpen(true);
    }
  };

  const handleControl = e => {
    if (registerOpen) {
      setRegisterOpen(false);
    } else if (loginOpen) {
      setLoginOpen(false);
    }
  };

  return (
    <div className="App">
      <LandingPage showModal={showModal}/>
      {loginOpen && (
        <Modal handleControl={handleControl}>
          <Login />
        </Modal>
      )}
      <Route exact path='/register' render={Register}/>
    </div>
  );
}
export default App;
