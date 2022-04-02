import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Projects from 'components/projects/Projects.js'
import ProjectPage from 'components/projects/ProjectPage.js'
import ProjectDirectory from 'components/projects/ProjectDirectory.js'
import Helmet from 'react-helmet';

function App() {

	return (
		<Router>
			<Helmet>
				<title>Projects - Owen Moogk</title>
			</Helmet>
			<Switch>
				<Route exact path='/projects'>
					<Projects />
				</Route>
				<Route exact path='/projects/directory'>
					<ProjectDirectory />
				</Route>
				<Route path='/projects/:name' children={<ProjectPage />} />
			</Switch>
		</Router>

	);
}

export default App;