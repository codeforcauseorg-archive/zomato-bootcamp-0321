import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Button, Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  avatar: {
    padding: "10px",
  },
});

export default function () {

  const arr = new Array(15);
  const [less, setLess] = useState(true);
  arr.fill(0);

  const classes = useStyles();

  return (
    <div>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >

        {
          arr.slice(0, 6).map((item, idx) => {
            return (
              <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
            );
          })
        }

      </Box>

      <Collapse
        in={!less}
      >
        <Box
          className={classes.root}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {arr.slice(6, arr.length).map((item, idx) => {
            return (
              <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
            );
          })}
        </Box>
      </Collapse>

      <Button
        onClick={() => {
          setLess(!less);
        }}
      >
        {" "}
        Show More
      </Button>
    </div>
  );
}
