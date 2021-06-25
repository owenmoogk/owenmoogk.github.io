import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Projects from  'components/projects/Projects.js'
import ProjectPage from 'components/projects/ProjectPage.js'

function App() {

	return (
		<Router>
			<Switch>
				<Route exact path='/projects'>
					<Projects/>
				</Route>
				<Route path='/projects/:name' children={<ProjectPage/>} />
			</Switch>
		</Router>
		
	);
}

export default App;