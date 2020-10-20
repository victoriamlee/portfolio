import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
    <AppBar position="fixed">
      <div>
      <ul>
        <a href="#home" data-nav-section="home">Introduction</a>
        <a href="#about" data-nav-section="about">About</a>
        <a href="#timeline" data-nav-section="timeline">Timeline</a>
      </ul>
      </div>
      <div className={classes.icons}>
        <a href="mailto:victorialee72@live.com"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/victoriamlee1/" target="_blank"><LinkedInIcon /></a>
        <a href="https://github.com/victoriamlee" target="_blank"><GitHubIcon /></a>
    </div>
    </AppBar>
    </div>
  );
}

export default Navbar;