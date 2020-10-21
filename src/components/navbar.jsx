import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Box from '@material-ui/core/Box';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { usePointNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/point';
// import { Font, FontProvider } from 'website/src/components/Font';

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

  // const PointNavigationMenu = () => {
    const [index, setIndex] = React.useState(1);
    const handleClick = i => (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIndex(i);
    };
  // }

  return (
    <div className={classes.navbar}>
      <Box height={56} display={'flex'}>
        {/* <FontProvider fonts={[{ font: 'Varela Round' }]}> */}
          <NavMenu useStyles={usePointNavigationMenuStyles}>
            <NavItem as={'div'} active={index === 0} onClick={handleClick(0)}>
              {/* <Font>Home</Font> */}
              <span style={{ color: grey[800] }}>Home</span>
            </NavItem>
            <NavItem as={'div'} active={index === 1} onClick={handleClick(1)}>
            <span style={{ color: grey[800] }}>About</span>
            </NavItem>
            <NavItem as={'div'} active={index === 2} onClick={handleClick(2)}>
            <span style={{ color: grey[800] }}>Skills</span>
            </NavItem>
            <NavItem as={'div'} active={index === 3} onClick={handleClick(3)}>
            <span style={{ color: grey[800] }}>Projects</span>
            </NavItem>
            <NavItem as={'div'} active={index === 4} onClick={handleClick(4)}>
      <span style={{ color: grey[800] }}>Contact</span>
      </NavItem>
          </NavMenu>
        {/* </FontProvider> */}
      </Box>
    </div>
  );
}

export default Navbar;