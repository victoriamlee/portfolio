import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '59px',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    backgroundColor: '#E4DAC2',
    color: grey[800],
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
  image: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // color: grey[800],
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: grey[800],
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
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

<ButtonBase
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.imageSrc}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              style={{ color: grey[800] }}
            >
              <h3>About me</h3>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>
  );
}

export default Sidebar;