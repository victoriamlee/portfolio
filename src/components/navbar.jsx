import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E4DAC2',
    backgroundAttachment: 'local',
  },
  titles: {
    paddingRight: '20px',
    // textDecoration: '#E4DAC2',
  },
  contact: {
    // display: 'flex',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
      {/* <ul> */}
      <div className={classes.navbar}>
        <div >
        <span className={classes.titles}><Link href="#home" style={{ color: grey[800] }}>Home</Link></span>
        <span className={classes.titles}><Link href="#about" style={{ color: grey[800] }}>About</Link></span>
        <span className={classes.titles}><Link href="#skills" style={{ color: grey[800] }}>Skills</Link></span>
        <span className={classes.titles}><Link href="#projects" style={{ color: grey[800] }}>Projects</Link></span>
      </div>
      <div className={classes.contact}>
      <Link href="#contact" style={{ color: grey[800] }}>Contact</Link>
    </div>
    </div>
      {/* </ul> */}
    </AppBar>
    </div>
  );
}

export default Navbar;