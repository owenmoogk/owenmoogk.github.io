import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Nav from "components/Nav.js"
import Homepage from 'components/homepage/Homepage.js'
import Workpage from 'components/work/Workpage.js'
import ContactPage from 'components/contact/Contact.js';
import ProjectRouter from 'components/ProjectRouter.js';
import Resources from 'components/Assets.js'
import 'styles.css'
import NotFoundPage from './components/NotFoundPage'

export default function App(props) {

	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'false' ? false : true)

	function toggleDarkMode() {
		localStorage.setItem('darkmode', darkMode ? false : true)
		setDarkMode(darkMode ? false : true)
	}

	
	return (
		<Router>
			<style dangerouslySetInnerHTML={{
				__html:
					darkMode
						? `:root{
						--backgroundColor: rgb(35,35,35);
						--textColor: white;
						--overlayColor: rgba(0,0,0,0.6);
						--primaryColor: rgb(135, 206, 235);
						--fade: rgb(189, 238, 255);
						--grey: lightgrey;
						--lightgrey: rgb(44,44,44);
					}`
						: `:root {
						--textColor: black;
						--backgroundColor: white;
						--overlayColor: rgba(255,255,255,0.6);
						--primaryColor: blue;
						--fade: rgb(100, 100, 255);
						--grey: grey;
						--lightgrey: lightgrey;
					}`
			}} />
			<Nav toggleDarkMode={toggleDarkMode} />
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
				<Route path='/assets'>
					<Resources />
				</Route>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Route path='/404'>
					<NotFoundPage />
				</Route>
				<Route path='/github' component={() => {
					window.location.href = 'https://github.com/owenmoogk?tab=repositories';
					return null;
				}} />
				<Redirect to='/404' />
			</Switch>

		</Router>
	);
}