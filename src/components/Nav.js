import React from 'react';
import pdf from 'resume.pdf'

export default function Nav() {
	return (
		<div id="navBox">
			<a href="/" className="navlinks"><p>Home</p></a>
			<a href="/projects" className="navlinks"><p>Projects</p></a>
			<a href="/work" className="navlinks"><p>Work</p></a>
			<a href="/contact" className="navlinks"><p>Contact</p></a>
			<a href={pdf} target="_blank" rel='noreferrer' className="navlinks"><p>Resume</p></a>
		</div>
	);
}