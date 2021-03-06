import React, { useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [selectedImg, setSeletectedImg] = useState(false);
  
  return (
    <div className="App">
      <Gallery clickedImg={setSeletectedImg} />
      { selectedImg ? <Modal selectedImg={selectedImg} closeModal={setSeletectedImg} /> : null }
    </div>
  );
}

export default App;
