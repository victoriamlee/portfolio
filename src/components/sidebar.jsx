import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
  },
  email: {
    display: 'flex',
    alignItems: 'center',
  },
  linkedin: {
    display: 'flex',
    alignItems: 'center',
  },
  github: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Hi I'm Victoria Lee</h1>
      <h2>I'm also a full stack developer</h2>
      {/* <span className={classes.email}><EmailIcon />victorialee72@live.com</span>
      <span className={classes.linkedin}><LinkedInIcon />victoriamlee1</span>
      <span className={classes.github}><GitHubIcon />victoriamlee</span> */}
    </div>
  );
}

export default Sidebar;