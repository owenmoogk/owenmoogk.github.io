import { useEffect, useState } from "react";
import FeaturedIcon from "components/projects/FeaturedIcon";

export default function Homepage() {

	const [splash, setSplash] = useState("Aspiring Software Developer")

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
				<div className='photo' id='pfp'>
					<img src='https://owenmoogk.github.io/owenmoogk/pfp.png' />
				</div>
			</div>			
			<div>
				<p>
					I'm currently a Grade 12 Student who is quite passionate about engineering and design. Next year I will be studying <a href='https://uwaterloo.ca/future-students/programs/mechatronics-engineering'>Mechatronics Engineering</a> at the <a href='https://uwaterloo.ca/'>University of Waterloo</a>. I made this website to work on my web development skills as well as showcase some work. Check out my <a href="projects">projects</a> page for details on personal endeavors with coding, hardware, web development, and 3D printing.
				</p>
			</div>
			<div>
				<p>

					Outside of school, I've worked as a student on the FRC robotics team <a href="https://2702rebels.com" target="_blank" rel='noreferrer'>2702 Rebels</a>, involved myself in the <a href="https://dukeofed.org" target="_blank" rel='noreferrer'>Duke of Edinburgh's Award</a>, and attended the prestigious month-long <a href="https://shad.ca" target="_blank" rel='noreferrer'>SHAD</a> program. For more info check out my <a href='work'>work</a> page.
				</p>
			</div>
			<div>
				<h1>Featured Projects</h1>

				<div id='featuredContainer'>
					<FeaturedIcon title={"2702 Rebels 2020 Robot"} name={"2702-2020"} type={'Mechanical Solidworks'} link={''} />
					<FeaturedIcon title={"Pathfinding Visualizer"} name={"pathfinding-visualizer"} type={'Python React'} link={''} />
				</div>
			</div>
		</div>
	);
}