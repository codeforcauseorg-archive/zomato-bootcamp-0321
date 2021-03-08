import { Switch, Route } from "react-router-dom";
import GoldPage from "../pages/GoldPage";
import OrderPage from "../pages/OrderPage";
import ProfilePage from "../pages/Profilepage";
import OutPage from "../pages/OutPage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";

import BottomNav from "../componenets/BottomNav";
import { Button } from "@material-ui/core";

import firebase from "../utils/firebase";

function BaseLayout({ user, setUser }) {
  return (
    <div>
      {/* <h1>{user.displayName}</h1> */}
      <Button
        onClick={() => {
          firebase.auth().signOut();
          setUser(null);
        }}
      >
        Logout
      </Button>
      <Switch>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/gold">
          <GoldPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/out">
          <OutPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
      </Switch>

      <BottomNav />
    </div>
  );
}

export default BaseLayout;
