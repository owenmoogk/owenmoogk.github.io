import { useEffect, useState } from "react";
import SkillIcon from "./SkillIcon";
import FeaturedIcon from "components/projects/FeaturedIcon";

export default function Homepage() {

	const [skillsLoaded, setSkillsLoaded] = useState(false)
	const [splash, setSplash] = useState("Aspiring Software Developer")
	
	function animateSkills() {
		var table = document.getElementById('skillsTable')
		if (table.getBoundingClientRect().top - window.innerHeight < 0) {
			setSkillsLoaded(true)
		}
		else {
			setSkillsLoaded(false)
		}
	}

	function loadSplash(){
		fetch('/assets/splashes.json')
		.then(response => response.json())
		.then(json => {
			let index = getRandomInt(0, json.length-1)
			let item = json[index]
			setSplash(item)
  		});
	}
	
	// from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	function getRandomInt(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return (Math.floor(Math.random() * (max - min + 1)) + min)
	}

	useEffect(() => {
		window.addEventListener('scroll', animateSkills)
	}, [])

	return (
		<div id='homePage'>
			<div id='homepageTitle'>
				<div id='text'>
					<div className='larger'>
						Hey, I'm
						<br />
						<span className='special'>Owen Moogk</span>
					</div>
					<p className='subtitle' id='splash' onClick={() => loadSplash()}>{splash}</p>
				</div>
				<div className='photo'>
					<img src='/assets/pfp-bw.png' />
				</div>
			</div>
			<div>
				<p>
					Hey there, it's Owen! This is my website I made using ReactJS to work on my web development skills as well as showcase my work and talents. If you have any inquires or comments, feel free to <a href='/contact'>reach out</a>! PS. I've also added some hidden features around the site, so have a look around!
				</p>
			</div>
			<div>
				<h1>Featured Projects</h1>

				<div id='featuredProjectContainer'>
					<FeaturedIcon title={"2702 Rebels 2020 Robot"} name={"2702-2020"} type={''} link={''} />
					<FeaturedIcon title={"Pathfinding Visualizer"} name={"pathfinding-visualizer"} type={''} link={''} />
				</div>
			</div>
			<div>

				<p>
					<i>Wait, you want to know about me?</i> In that case, I am currently a highschool student in Grade 12 at <a href="https://bci.wrdsb.ca" target="_blank" rel='noreferrer'>Bluevale Collegiate Institute</a>,
					who is quite passionate about engineering and design. Check out my <a href="projects">projects</a> page for details on personal endeavors with coding, hardware, web development, and 3D printing.
				</p>
			</div>
			<div>
				<p>

					To pursue more learning and experience in these fields I have participated in many extracurriculars, including working as a student on the FRC robotics team <a href="https://2702rebels.com" target="_blank" rel='noreferrer'>2702 Rebels</a>, involving myself in the <a href="https://dukeofed.org" target="_blank" rel='noreferrer'>Duke of Edinburgh's Award</a>, and attending the prestigious month-long <a href="https://shad.ca" target="_blank" rel='noreferrer'>SHAD</a> program. More info about all of this can be found on my <a href='work'>work</a> page.
				</p>
			</div>

			<div id='skills'>
				<p>Lastly, these are some skills I've been working to refine over the last few years. To see them in action check out my <a href='https://github.com/owenmoogk' target='_blank' rel='noreferrer'>Github</a>.</p>
				<table id='skillsTable'>
					<h3>Web Development</h3>
					<SkillIcon name='ReactJS' percent={80} doLoad={skillsLoaded}/>
					<SkillIcon name='Javascript' percent={90} doLoad={skillsLoaded}/>
					<SkillIcon name='HTML / DOM' percent={90} doLoad={skillsLoaded}/>
					<SkillIcon name='CSS' percent={75} doLoad={skillsLoaded}/>

					<h3>Coding</h3>
					<SkillIcon name='Python' percent={90} doLoad={skillsLoaded}/>
					<SkillIcon name='Django' percent={40} doLoad={skillsLoaded}/>
					<SkillIcon name='C++ / Arduino' percent={30} doLoad={skillsLoaded}/>
					<SkillIcon name='Git' percent={50} doLoad={skillsLoaded}/>

					<h3>Mechanical</h3>
					<SkillIcon name='Solidworks' percent={60} doLoad={skillsLoaded}/>
					<SkillIcon name='3D Printing' percent={70} doLoad={skillsLoaded}/>
				</table>
			</div>
		</div>
	);
}