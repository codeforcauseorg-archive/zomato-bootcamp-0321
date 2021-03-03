import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import axios from "axios";

let Hotels = () => {
  let [users, setUsers] = useState([]);

  let fetch = () => {
    axios.get("http://localhost:5000/hotels").then((response) => {
      setUsers(response.data);
    });
  };

  return (
    <div className="App">
      <button onClick={fetch}>Fetch</button>

      <div>{
      users.map((user, index) => {
        return (
          <img key={index} src={"http://localhost:5000" + user.path.substring(1)} style={{
            width: "200px",
            height: "200px"
          }} />
        )
      })
      }</div>
    </div>
  );
}

export default Hotels;
