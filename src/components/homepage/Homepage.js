import { useEffect, useState } from "react";
import SkillIcon from "./SkillIcon";

export default function Homepage() {

	const [skillsLoaded, setSkillsLoaded] = useState(false)

	function animateSkills() {
		if (window.scrollY >= window.innerHeight/2) {
			setSkillsLoaded(true)
		}
		else if (window.scrollY < 100) {
			setSkillsLoaded(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', animateSkills)
	}, [])

	return (
		<div id='homePage'>
			<div id='homepageTitle'>
				<div className='larger'>
					turning ideas into
					<br />
					<span className='special'>technology.</span>
				</div>

				<svg onClick={() => {
					window.scroll(0, window.innerHeight - 70)
				}} id='downArrow' width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M4 9l8 8l8-8" stroke="var(--textColor)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg>

			</div>

			<div id='about'>
				<div id='homepageSplitscreen'>
					<div>

						<h1>About</h1>
						<p>
							Hey there, it's Owen! This is my website I made using ReactJS to work on my web developement skills as well as showcase my work and skills. If you have any inquires, questions, or comments, feel free to <a href='/contact'>reach out</a>!

							<br /><br />

							I am currently a highschool student at <a href="https://bci.wrdsb.ca" target="_blank" rel='noreferrer'>Bluevale Collegiate Institute</a>,
							who is quite passionate about engineering, coding, and design. Check out my <a href="projects">projects</a> page for details on personal endevours with Coding, Hardware, Web Development, and 3D printing.
							
							<br/><br/>

							To pursue more learning and experience in these fields I have participated in many extracurriculars, including working as a student on the FRC robotics team <a href="https://2702rebels.com" target="_blank" rel='noreferrer'>2702 Rebels</a>, involving myself in the <a href="https://dukeofed.org">Duke of Edinburgh's Award</a>, and attending the prestegious month-long <a href="https://shad.ca" target="_blank" rel='noreferrer'>SHAD</a> program. More info about all of this can be found on my <a href='work'>work</a> page.
						</p>
					</div>

					<div id='skills'>
						<h1>Skills</h1>
						<table id='skillsTable'>
							<h3>Web Development</h3>
							<SkillIcon name='ReactJS' percent={80} doLoad={skillsLoaded} />
							<SkillIcon name='Javascript' percent={90} doLoad={skillsLoaded} />
							<SkillIcon name='HTML / DOM' percent={90} doLoad={skillsLoaded} />
							<SkillIcon name='CSS' percent={75} doLoad={skillsLoaded} />

							<h3>Coding</h3>
							<SkillIcon name='Python' percent={90} doLoad={skillsLoaded} />
							<SkillIcon name='Django' percent={40} doLoad={skillsLoaded} />
							<SkillIcon name='C++ / Arduino' percent={30} doLoad={skillsLoaded} />
							<SkillIcon name='Git' percent={50} doLoad={skillsLoaded} />

							<h3>Mechanical</h3>
							<SkillIcon name='Solidworks' percent={60} doLoad={skillsLoaded} />
							<SkillIcon name='3D Printing' percent={70} doLoad={skillsLoaded} />

						</table>
					</div>

				</div>
			</div>

		</div>
	);
}