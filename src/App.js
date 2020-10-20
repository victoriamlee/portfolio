import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'

function App() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar />
		      <Sidebar />
		<div id="colorlib-main">
			<Introduction />
			<About />
      <Skills />
			<Projects />
			<Blog />
			<Timeline />
          	</div>
      	</div>
      </div>
    )
}

export default App;