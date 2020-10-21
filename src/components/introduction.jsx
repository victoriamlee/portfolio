import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Victoria from '../docs/Victoria.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '59px',
    // width: 600,
    // height: 600,
    // // marginLeft: 120,
  },
  image: {
    width: 600,
    height: 600,
    // marginLeft: 120,
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