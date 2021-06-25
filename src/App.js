import React from 'react';
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

function App(props) {

	return (
		<Router>
			<NavButton/>
			<Nav/>
			<Links/>
			<Switch>
				<Route path='/projects'>
					<ProjectRouter/>
				</Route>
				<Route path='/work'>
					<Workpage/>
				</Route>
				<Route path='/contact'>
					<ContactPage/>
				</Route>
				<Route exact path='/'>
					<Homepage/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;