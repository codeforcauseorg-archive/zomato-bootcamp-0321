import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { useEffect } from "react";

import firebase from "../utils/firebase";
import axios from "../utils/axios";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/",
};

export default function Auth({ setUser }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          });
      }
    });
  });

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
