import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Nav from "components/Nav.js"
import NavButton from 'components/NavButton.js'
import Homepage from 'components/homepage/Homepage.js'
import Workpage from 'components/Workpage.js'
import ContactPage from 'components/contact/Contact.js';
import ProjectRouter from 'components/ProjectRouter.js';
import Links from 'components/Links'
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
					}`
					: `:root {
						--cardColor: white;
						--textColor: black;
						--blue: blue;
						--backgroundColor: rgb(230,230,230);
					}`
			}} />
			<NavButton />
			<Nav toggleDarkMode={toggleDarkMode}/>
			<Links />
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