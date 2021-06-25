import React from 'react';
import ProjectIcon from './ProjectIcon'
import {filterProjects, search} from './projectSorting'
import 'css/projects/projects.css'
import 'css/projects/sort.css'

export default function ProjectPage() {
	return (
		<div className="main">
            <div className="page">
                <p className="title">Projects</p>
                <br></br>
                <div className="sorting">
					<div className="buttons">
						<span className="sort_all btn active" onClick={() => filterProjects('all')}><p>All</p></span>
						<span className="sort_cad btn" onClick={() => filterProjects('cad')}><p>CAD</p></span>
						<span className="sort_coding btn" onClick={() => filterProjects('coding')}><p>Coding</p></span>
						<span className="sort_mechanical btn" onClick={() => filterProjects('mechanical')}><p>Mechanical</p></span>
						<span className="sort_web-dev btn" onClick={() => filterProjects('web-dev')}><p>Web-Dev</p></span>
					</div>
					<div className="sort">
						<input type="text" id="searchBar" onKeyUp={()=>search()} placeholder="Search by Date, Title, or Text" title="Type to search"/>
					</div>
				</div>
				<br/><br/><br/><br/>
				<div id="projectsGoHere">
					<ProjectIcon title='Music Bot' name='music-bot' type='coding'/>
					<ProjectIcon title='NHL Fantasy App' name='nhl-fantasy' type='coding'/>
					<ProjectIcon title='Pathfinding Visualizer' name='pathfinding-visualizer' type='coding'/>
					<ProjectIcon title='Sorting Visualizer' name='sorting-visualizer' type='coding' link='https://owenmoogk.github.io/sorting-visualizer/'/>
					<ProjectIcon title='Firefly Simulator' name='firefly-simulator' type='coding'/>
					<ProjectIcon title='Outbreak Simulator' name='outbreak-simulator' type='coding'/>
					<ProjectIcon title='Pendulum Physics Simulator' name='pendulum-simulator' type='coding'/>
					<ProjectIcon title='Sudoku Bot' name='sudoku-bot' type='coding' link='https://owenmoogk.github.io/sudoku-visualizer'/>
					<ProjectIcon title='Notes App' name='notes-app' type='coding'/>
					<ProjectIcon title='LAN Messenger' name='lan-messenger' type='coding'/>
					<ProjectIcon title='Grocery List App' name='grocery-list' type='coding'/>
					<ProjectIcon title='Unix Time Converter' name='unix-time' type='coding' link='https://owenmoogk.github.io/unix-time'/>
					<ProjectIcon title='Password Manager' name='password-manager' type='coding' link='https://owenmoogk.github.io/password-manager/'/>
					<ProjectIcon title='Color Picker' name='color-picker' type='coding'/>
					<ProjectIcon title='COVID Scraper' name='covid-scraper' type='coding'/>
					<ProjectIcon title='COVID Website' name='covid-website' type='web-dev'/>
					<ProjectIcon title='Dino Game AI' name='dino-game-ai' type='coding'/>
					<ProjectIcon title='Geometry Calculator' name='geometry-calculator' type='coding'/>
					<ProjectIcon title='Simplelib' name='simplelib' type='coding' link='http://simplelib.tk/'/>
					<ProjectIcon title='Flappy Bird AI' name='flappy-bird-ai' type='coding'/>
					<ProjectIcon title='Email Bot' name='email-bot' type='coding'/>
					<ProjectIcon title='Snake' name='snake' type='coding'/>
					<ProjectIcon title='Model Rocket' name='model-rocket' type='mechanical'/>
					<ProjectIcon title='Hydraulic Arm' name='hydraulic-arm' type='mechanical'/>
					<ProjectIcon title='Space Invaders' name='space-invaders' type='coding'/>
					<ProjectIcon title='The Compiler' name='the-compiler' type='web-dev' link='http://thecompiler.cf/'/>
					<ProjectIcon title='Website Development' name='web-development' type='web-dev'/>
					<ProjectIcon title='Renders/Graphic Design' name='renders' type='CAD'/>
					<ProjectIcon title='Minecraft Modifications' name='minecraft-mods' type='coding'/>
					<ProjectIcon title='Vortex' name='vortex' type='CAD'/>
					<ProjectIcon title='2702 Rebels 2020 Robot' name='2702-2020' type='Mechanical'/>
					<ProjectIcon title='Engine Assembly' name='engine' type='Mechanical'/>
					<ProjectIcon title='2702 Rebels 2019 Robot' name='2702-2019' type='Mechanical'/>
				</div>
            </div>
        </div>
	);
}
