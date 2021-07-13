import React from 'react';
import ProjectIcon from './ProjectIcon'
import { search } from './projectSorting'
import ProjectButton from './ProjectButton';

export default function ProjectPage() {
	return (
		<div className="main">
			<p className="title">Projects</p>
			<br></br>
			<div id="sorting">
				<div id="buttons">
					<ProjectButton name='All'/>
					<ProjectButton name='Python'/>
					<ProjectButton name='Javascript'/>
					<ProjectButton name='React'/>
					<ProjectButton name='Django'/>
					<ProjectButton name='Solidworks'/>
					<ProjectButton name='Mechanical'/>
				</div>
				<div id="search">
					<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search by Date, Title, or Text" title="Type to search" />
				</div>
			</div>
			<div id="projectsGoHere">
				<ProjectIcon title='Music Bot' name='music-bot' type='React Django' />
				<ProjectIcon title='NHL Fantasy App' name='nhl-fantasy' type='Django' />
				<ProjectIcon title='Pathfinding Visualizer' name='pathfinding-visualizer' type='Python Pygame' />
				<ProjectIcon title='Sorting Visualizer' name='sorting-visualizer' type='Javascript' link='https://owenmoogk.github.io/sorting-visualizer/' />
				<ProjectIcon title='Simplelib' name='simplelib' type='Python Javascript' link='https://owenmoogk.github.io/simplelib-documentation' />
				<ProjectIcon title='Outbreak Simulator' name='outbreak-simulator' type='Python Pygame' />
				<ProjectIcon title='Email Bot' name='email-bot' type='Python' />
				<ProjectIcon title='Flappy Bird AI' name='flappy-bird-ai' type='Python NEAT' />
				<ProjectIcon title='Firefly Simulator' name='firefly-simulator' type='Python Pygame' />
				<ProjectIcon title='Pendulum Physics Simulator' name='pendulum-simulator' type='Python Matplotlib Pygame' />
				<ProjectIcon title='Dino Game AI' name='dino-game-ai' type='Python NEAT' />
				<ProjectIcon title='Sudoku Bot' name='sudoku-visualizer' type='Javascript' link='https://owenmoogk.github.io/sudoku-visualizer' />
				<ProjectIcon title='Notes App' name='notes-app' type='Javascript Flask' />
				<ProjectIcon title='LAN Messenger' name='lan-messenger' type='Django Javascript' />
				<ProjectIcon title='Grocery List App' name='grocery-list' type='Django Javascript' />
				{/* <ProjectIcon title='Unix Time Converter' name='unix-time' type='Javascript' link='https://owenmoogk.github.io/unix-time' /> */}
				{/* <ProjectIcon title='Password Manager' name='password-manager' type='Javascript' link='https://owenmoogk.github.io/password-manager/' /> */}
				<ProjectIcon title='Color Picker' name='color-picker' type='Javascript' />
				<ProjectIcon title='COVID Scraper' name='covid-scraper' type='Python' />
				<ProjectIcon title='COVID Website' name='covid-website' type='Javascript' />
				<ProjectIcon title='Geometry Calculator' name='geometry-calculator' type='Javascript Desmos' />
				<ProjectIcon title='Snake' name='snake' type='Python Pygame' />
				<ProjectIcon title='Model Rocket' name='model-rocket' type='Solidworks' />
				<ProjectIcon title='Hydraulic Arm' name='hydraulic-arm' type='Solidworks' />
				{/* <ProjectIcon title='Space Invaders' name='space-invaders' type='Pygame Python' /> */}
				<ProjectIcon title='The Compiler' name='the-compiler' type='Javascript' link='http://thecompiler.cf/' />
				<ProjectIcon title='Website Development' name='web-development' type='React' githubLink='https://github.com/owenmoogk/personal-website' />
				<ProjectIcon title='Renders/Graphic Design' name='renders' type='Solidworks' />
				{/* <ProjectIcon title='Minecraft Modifications' name='minecraft-modifications' type='coding' /> */}
				<ProjectIcon title='Vortex' name='vortex' type='Solidworks' />
				<ProjectIcon title='2702 Rebels 2020 Robot' name='2702-2020' type='Mechanical Solidworks' githubLink='' />
				<ProjectIcon title='Engine Assembly' name='engine' type='Mechanical' githubLink='' />
				<ProjectIcon title='2702 Rebels 2019 Robot' name='2702-2019' type='Mechanical Solidworks' githubLink='' />
			</div>
		</div>
	);
}
