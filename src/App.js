import React, { useState } from "react";
import Modal from "./pages/Modal";
import Register from "./pages/Register";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleControl = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={handleControl}>Trigger Modal</button>
      {modalOpen && (
        <Modal handleControl={handleControl}>
          <Register />
        </Modal>
      )}
    </div>
  );
}

export default App;
