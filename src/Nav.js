import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import ShopIcon from '@material-ui/icons/Shop';
import InfoIcon from '@material-ui/icons/Info';
import Logo from './assets/logo1.png'


const useStyles = makeStyles((theme) => ({

  list: {
    width: 250,
  },
  white: {
    color: 'white',
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Link to='/' ><ListItemText primary='Home' /></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><InfoIcon /></ListItemIcon>

          <Link to='/about' ><ListItemText primary='About' /></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><ContactsIcon /></ListItemIcon>

          <Link to='/contact' ><ListItemText primary='Contact' /></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><ShopIcon /></ListItemIcon>

          <Link to='/product' ><ListItemText primary='Product' /></Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className={classes.white} /></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </IconButton>
          <Button color="inherit">
            <img src={Logo} alt="Shoe Store" width="70" height="50"
            />
            <span className="pl-3">Shoes Store</span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
