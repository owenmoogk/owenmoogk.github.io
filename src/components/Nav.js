import React, { useState } from 'react';
import Links from 'components/Links'

export default function Nav(props) {

	const [shown, setShown] = useState(false);
	
	window.addEventListener('click', (e)=>{
		if (shown && e.target === document.getElementById('navBox')){
			setShown(false)
		}
	})

	return (
		<>
			<svg id="navButton" onClick={()=>setShown(!shown)} preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M7.95 11.95h32"/><path d="M7.95 23.95h32"/><path d="M7.95 35.95h32"/></g></svg>
			<div id="navBox" style={{display: shown ? "flex" : ''}}>
				<div id='navLinks'>
					<a href="/" className="navlink">Home</a>
					<a href="/projects" className="navlink">Projects</a>
					<a href="/work" className="navlink">Work</a>
					<a href="/contact" className="navlink">Contact</a>
					<a href='https://owenmoogk.github.io/owenmoogk/resume/resume.pdf' target="_blank" rel='noreferrer' className="navlink">Resume</a>
					<div id='darkmode' className='navlink' onClick={props.toggleDarkMode}>
						<svg width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" /></svg>
					</div>
				</div>
				<Links />
			</div>
		</>
	);
}