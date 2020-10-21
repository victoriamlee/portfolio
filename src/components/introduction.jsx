import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Victoria from '../docs/Victoria.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '59px',
    width: '100%',
    height: 'auto',
    border: 'solid',
    // // marginLeft: 120,
  },
  image: {
    // width: '100%',
    height: '100vh',
    // marginLeft: 120,
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Introduction = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <CardMedia
              className={classes.image}
              image={Victoria}
              title="Victoria Lee"
            />
    </div>
  );
}

export default Introduction;