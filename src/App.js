import React, { useState } from "react";
import Modal from "./pages/Modal";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // const [Login, setLoginOpen] = useState(false);

  const handleControl = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={handleControl}>Signup</button>
      {modalOpen && (
        <Modal handleControl={handleControl}>
          <Register />
        </Modal>

      )}

      <button onClick={handleControl}>Login</button>
      {modalOpen && (
        <Modal handleControl={handleControl}>
          <Login />
        </Modal>

      )}
    </div>
  );
}

export default App;
