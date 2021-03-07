import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {AccountBoxOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
});

export default function BottomNav() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);


  return (
    <BottomNavigation
      style={{
        position : "fixed",
        bottom : "0px",
        left: "0px",
        right : "0px"
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Order" value="/order" icon={<AccountBoxOutlined />} />
      <BottomNavigationAction label="Order" value="/out" icon={<AccountBoxOutlined />} />
      <BottomNavigationAction label="Gold" value="/gold" icon={<AccountBoxOutlined />} />
      <BottomNavigationAction label="Order" value="/search" icon={<AccountBoxOutlined />} />
      <BottomNavigationAction label="Profile" value="/profile" icon={<AccountBoxOutlined />} />
    </BottomNavigation>
  );
}
