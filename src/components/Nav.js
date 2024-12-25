import React from 'react';
import pdf from '../resume.pdf'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

export default function Nav() {
	return (
		<div id="navBox">
			<a href="/" className="navlinks"><p>Home</p></a>
			<Link to="/projects" className="navlinks"><p>Projects</p></Link>
			<Link to="/work" className="navlinks"><p>Work</p></Link>
			<Link to="/contact" className="navlinks"><p>Contact</p></Link>
			<a href={pdf} target="_blank" rel='noreferrer' className="navlinks"><p>Resume</p></a>
		</div>
	);
}