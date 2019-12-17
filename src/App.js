import React, { useState } from "react";
import Modal from "./pages/Modal";
import Register from "./pages/Register";

function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = e => {
    if (e.target.id === "register") {
      setRegisterOpen(true);
    } else if (e.target.id === "login") {
      setLoginOpen(true);
    }
  };

  const handleControl = e => {
    if (e.target.id === "modal-wrapper" && registerOpen) {
      setRegisterOpen(false);
    } else if (e.target.id === "modal-wrapper" && loginOpen) {
      setLoginOpen(false);
    }
  };

  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={showModal} id="register">
        Sign Up
      </button>
      <button onClick={showModal} id="login">
        Log In
      </button>
      {registerOpen && (
        <Modal handleControl={handleControl}>
          <Register />
        </Modal>
      )}
      {loginOpen && (
        <Modal handleControl={handleControl}>
          <div>LOGIN FORM</div>
        </Modal>
      )}
    </div>
  );
}

export default App;
