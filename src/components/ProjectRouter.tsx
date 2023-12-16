import {
	Routes,
	Route
} from 'react-router-dom';
import Projects from './projects/Projects'
import ProjectPage from './projects/ProjectPage'
import ProjectDirectory from './projects/ProjectDirectory'
import Helmet from 'react-helmet';

function App() {

	return (
		<>
			<Helmet>
				<title>{"Projects - Owen Moogk"}</title>
			</Helmet>
			<Routes>
				<Route path='' element={<Projects />} />
				<Route path='/directory' element={<ProjectDirectory />} />
				<Route path='/:name' element={<ProjectPage />} />
			</Routes>
		</>
	);
}

export default App;