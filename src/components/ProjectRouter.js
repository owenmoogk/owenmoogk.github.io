import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Projects from './projects/Projects.js'
import ProjectPage from './projects/ProjectPage.js'
import ProjectDirectory from './projects/ProjectDirectory.js'
import Helmet from 'react-helmet';

function App() {

	return (
		<>
			<Helmet>
				<title>Projects - Owen Moogk</title>
			</Helmet>
			<Routes>
				<Route exact path='' element={<Projects />} />
				<Route exact path='/directory' element={<ProjectDirectory />} />
				<Route path='/:name' element={<ProjectPage />} />
			</Routes>
		</>
	);
}

export default App;