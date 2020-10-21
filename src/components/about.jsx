import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import avatar from '../docs/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'solid',
    paddingTop: 50,
    paddingBottom: 50,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FCF9F2',
  },
  // small: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  // },
  image: {
    position: 'absolute',
    width:400,
    height: 400,
    // marginLeft: 120,
  },
  info: {
    border: 'solid',
    marginTop: 220,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#E4DAC2',
    padding: 300,
  },
}));

const About = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
             <CardMedia
              className={classes.image}
              image={avatar}
              title="Victoria Lee"
            />
            <div className={classes.info}>
            <h2>About Me</h2>
            <p>This is more about me</p>
            </div>
    </div>
  );
}

export default About;