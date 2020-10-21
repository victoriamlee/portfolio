import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FCF9F2',
    color: grey[800],
    display: 'flex',
    justifyContent: 'center',
  },
  // titles: {
  //   paddingRight: '20px',
  //   // textDecoration: '#E4DAC2',
  // },
  // contact: {
  //   // display: 'flex',
  // },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Projects</h1>
    </div>
  );
}

export default Projects;