import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'

function App() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Navbar />
		<Sidebar></Sidebar>
		<div id="colorlib-main">
			<Introduction></Introduction>
			<About></About>
			<Projects></Projects>
			<Blog></Blog>
			<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    )
}

export default App;