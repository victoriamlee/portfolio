import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'

const useStyles = makeStyles((theme) => ({
  intro: {
		display: 'flex',
		width: '100%',
		marginRight: 'auto',
		// border: 'solid',
    // height: 600,
    // marginLeft: 120,
  },
}));

function App() {
	const classes = useStyles();

    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar />
					<div className={classes.intro}>
		      <Sidebar />
		{/* <div id="colorlib-main"> */}
			<Introduction />
			</div>
			<About />
      <Skills />
			<Projects />
			<Blog />
			<Timeline />
          	{/* </div> */}
      	</div>
      </div>
    )
}

export default App;