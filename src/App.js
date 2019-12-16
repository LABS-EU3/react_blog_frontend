import React, {useState} from "react";
import Modal from "./pages/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  
  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={() => {setModalOpen(!modalOpen)}}>Register</button>
      {modalOpen && <Modal />}
    </div>
  );
}

export default App;
