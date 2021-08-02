import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Nav from "components/Nav.js"
import Homepage from 'components/homepage/Homepage.js'
import Workpage from 'components/work/Workpage.js'
import ContactPage from 'components/contact/Contact.js';
import ProjectRouter from 'components/ProjectRouter.js';
import 'styles.css'

export default function App(props) {

	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'false' ? false : true)

	function toggleDarkMode() {
		localStorage.setItem('darkmode', darkMode ? false : true)
		setDarkMode(darkMode ? false : true)
	}

	return (
		<Router>
			<style dangerouslySetInnerHTML={{__html: 
				darkMode
					? `:root{
						--backgroundColor: black;
						--textColor: white;
						--blue: lightblue;
						--cardColor: rgb(30,30,30);
						--overlayColor: rgba(0,0,0,0.8);
						--pink: #FF69B4;
						--subtitleColor: lightgrey;
					}`
					: `:root {
						--cardColor: white;
						--textColor: black;
						--blue: blue;
						--backgroundColor: rgb(230,230,230);
						--overlayColor: rgba(255,255,255,0.8);
						--pink: blue;
						--subtitleColor: grey;
					}`
			}} />
			<Nav toggleDarkMode={toggleDarkMode}/>
			<Switch>
				<Route path='/projects'>
					<ProjectRouter />
				</Route>
				<Route path='/work'>
					<Workpage />
				</Route>
				<Route path='/contact'>
					<ContactPage />
				</Route>
				<Route exact path='/'>
					<Homepage />
				</Route>
			</Switch>
			
		</Router>
	);
}