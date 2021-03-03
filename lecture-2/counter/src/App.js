import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

function App() {

  let [chacha, toharChacha] = useState(0);

  let increase = ()=>{
    toharChacha(chacha + 1);
  }


  return (
    <div className="App">
      <button onClick={increase}>Click it</button>
      <h1>{chacha}</h1>
    </div>
  );
}

export default App;
