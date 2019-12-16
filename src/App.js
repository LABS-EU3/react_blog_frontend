import React, { useState } from "react";
import Modal from "./pages/Modal";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  const [signUpModal, setSignUpModal] = useState(false);

  const [loginModal, setLoginModal] = useState(false);

  const handleControl = () => {
    setSignUpModal(!signUpModal);
  };

  const handleLogin = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={handleControl}>Signup</button>
      {signUpModal && (
        <Modal handleControl={handleControl}>
          <Register />
        </Modal>

      )}

      <button onClick={handleLogin}>Login</button>
      {loginModal && (
        <Modal handleControl={handleLogin}>
          <Login />
        </Modal>

      )}

    </div>
  );
}

export default App;
