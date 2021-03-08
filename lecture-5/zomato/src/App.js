
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BaseLayout from './layouts/BaseLayout';
import Auth from '../../../lecture-5/zomato/src/componenets/Auth';
import { useState } from 'react';

function App() {

  let [user, setUser] = useState(null);

  return (
    <Router>
      {user ? <BaseLayout user={user} setUser={setUser}/> : <Auth setUser={setUser}/>}
     </Router>
  );
}

export default App;
