
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BaseLayout from './layouts/BaseLayout';
import { useState } from 'react';

function App() {

  let [user, setUser] = useState({});

  return (
    <Router>
      {user ? <BaseLayout /> : <Auth setUser={setUser}/>}
     </Router>
  );
}

export default App;
