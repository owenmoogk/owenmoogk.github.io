import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Nav from "./components/Nav"
import Homepage from './components/homepage/Homepage'
import Workpage from './components/work/Workpage';
import ContactPage from './components/contact/Contact';
import ProjectRouter from './components/ProjectRouter';
import Assets from './components/Assets'
import './styles.css'
import NotFoundPage from './components/NotFoundPage'
import Sitemap from './components/Sitemap';
import Blog from './components/blog/Blog';

function Redirect() {
	window.location.replace("https://github.com/owenmoogk/")
	return (<></>)
}

export default function App() {

	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'false' ? false : true)

	function toggleDarkMode() {
		localStorage.setItem('darkmode', darkMode ? "false" : "true")
		setDarkMode(darkMode ? false : true)
	}

	return (
		<>
			<div id='backgroundDiv' />
			<Router>
				<style dangerouslySetInnerHTML={{
					__html:
						darkMode
						// --gradient: linear-gradient(45deg, 	#332024, #001633, #332024);

							? `:root{
									--backgroundColor: rgb(35,35,35);
									--textColor: white;
									--overlayColor: rgba(0,0,0,0.6);
									--primaryColor: rgb(135, 206, 235);
									--linkColor: skyblue;
									--linkHover: pink;
									--fade: rgb(189, 238, 255);
									--grey: lightgrey;
									--lightgrey: rgb(44,44,44);
									--gradient: var(--backgroundColor)
									--navBackground: rgba(50, 50, 50, 0.4);
								}`
							: `:root {
									--textColor: black;
									--backgroundColor: rgb(35,35,35);
									--overlayColor: rgba(255,255,255,0.6);
									--primaryColor: #388ed1;
									--linkHover: rgb(60,60,60);
									--linkColor: #388ed1;
									--fade: rgb(100, 100, 255);
									--grey: rgb(72,72,72);
									--lightgrey: lightgrey;
									--gradient: linear-gradient(45deg, skyblue, pink);
									--navBackground: rgba(255, 255, 255, 0.4);
								}`
				}} />
				<Nav toggleDarkMode={toggleDarkMode} />
				<Routes>
					<Route path='/projects/*' element={<ProjectRouter />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/work' element={<Workpage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/assets' element={<Assets />} />
					<Route path='/sitemap' element={<Sitemap />} />
					<Route path='/' element={<Homepage />} />
					<Route path='/404' element={<NotFoundPage />} />
					<Route path='/github' element={<Redirect />} />
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>

			</Router>
		</>
	);
}