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
import 'css/STYLES.css'

export default function App(props) {

	const [darkMode, setDarkMode] = useState(true)

	function toggleDarkMode() {
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
						--backgroundColor: white;
						--textColor: black;
						--blue: blue;
						--cardColor: rgb(230,230,230);
					}`
			}} />
			<NavButton />
			<Nav />
			<Links />
			<div id='darkmode' onClick={toggleDarkMode}>
				<svg width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" /></svg>
			</div>
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