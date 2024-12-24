import React from 'react';
import {
	HashRouter as Router,
	Routes as Switch,
	Route
} from 'react-router-dom';
import Nav from "./components/Nav.js"
import NavButton from './components/NavButton.js'
import Homepage from './components/homepage/Homepage.js'
import Workpage from './components/Workpage.js'
import ContactPage from './components/contact/Contact.js';
import ProjectPage from './components/projects/ProjectPage.js'
import './css/index.css'
import Projects from './components/projects/Projects.js'

function App(props) {

	return (
		<Router>
			<NavButton/>
			<Nav/>
			<Switch>
				<Route exact path='/projects' element={<Projects/>}/>
				<Route path='/projects/:name' element={<ProjectPage />} />
				<Route path='/work' element={<Workpage/>}/>
				<Route path='/contact' element={<ContactPage/>}/>
				<Route exact path='/' element={<Homepage/>}/>
			</Switch>
		</Router>
	);
}

export default App;