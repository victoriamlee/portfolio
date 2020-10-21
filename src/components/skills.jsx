import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E4DAC2',
    color: grey[800],
    display: 'flex',
    justifyContent: 'center',
    // marginTop: '59px',
    // width: '90%',
    // height: 'auto',
    // border: 'solid',
    // // marginLeft: 120,
  },
  info: {
    backgroundColor: '#FCF9F2',
    marginTop: 50,
    marginBottom: 50,
    padding: 300,
    paddingTop: 20,
    paddingBottom: 400,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    // border: 'solid',
    // height: '100vh',
    // marginLeft: 120,
    // maxWidth: '100%',
    // maxHeight: '100%',
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    // border: 'solid',
  },
  front: {
    display: 'flex',
    justifyContent: 'flex-start',
    // border: 'solid',
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
      <div className={classes.skills}>
      <h1>Skills</h1>
      </div>
      <div className={classes.front}>
      <h2>Web Front End</h2>
      </div>
      <h2>Web Back End</h2>
      <h2>Databases</h2>
      <h2>Languages</h2>
      </div>
    </div>
  );
}

export default Skills;