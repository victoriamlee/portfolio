import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
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
    <div>
      <h1>Victoria Lee</h1>
      <span className={classes.email}><EmailIcon />victorialee72@live.com</span>
      <span className={classes.linkedin}><LinkedInIcon />victoriamlee1</span>
      <span className={classes.github}><GitHubIcon />victoriamlee</span>
    </div>
  );
}

export default Sidebar;