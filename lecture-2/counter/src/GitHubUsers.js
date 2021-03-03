import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import axios from "axios";

let GitHubUsers = () => {
  let [users, setUsers] = useState([]);

  let fetch = () => {
    axios.get("https://api.github.com/users").then((response) => {
      setUsers(response.data);
    });
  };

  return (
    <div className="App">
      <button onClick={fetch}>Fetch</button>

      <div>{
      users.map((user, index) => {
        return (
          <img key={index} src={user.avatar_url} style={{
            width: "200px",
            height: "200px"
          }} />
        )
      })
      }</div>
    </div>
  );
}

export default GitHubUsers;
