import { AppBar, makeStyles, TextField, Toolbar } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: '#fff'
  }
}))

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <LocationOnOutlined style={{ color: '#000', marginRight: '8px' }} />
        <TextField fullWidth placeholder="H 133 Kunwar Singh Nagar" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;