import React, { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon'
import { search } from './projectSorting'
import ProjectButton from './ProjectButton';

export default function ProjectPage() {

	const [projectData, setProjectData] = useState()

	function fetchProjects() {
		var tmpProjectData = []
		fetch(process.env.PUBLIC_URL + 'assets/projectDirectory.json')
		.then(response => response.json())
		.then(projectUrls => {
			var requests = []
			for (const projectUrl of projectUrls) {
				requests.push(fetch(process.env.PUBLIC_URL + 'assets/projects/' + projectUrl + '.json')
					.then(response => response.json())
					.then(currentProjectData => {
						tmpProjectData.push({...currentProjectData.meta, name: projectUrl})
					})
					.catch(error => console.log(projectUrl))
				)
			}
			// once all the loading is done
			Promise.all(requests).then(function(){
				// make sure they are in the proper order, sort by name
				tmpProjectData.sort((a,b) => {
					return(projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
				})

				setProjectData(tmpProjectData)
			})
		})
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div className="main">
			<p className="title">Projects</p>
			<br></br>
			<div id="sorting">
				<div id="buttons">
					<ProjectButton name='All' />
					<ProjectButton name='Python' />
					<ProjectButton name='Javascript' />
					<ProjectButton name='React' />
					<ProjectButton name='Django' />
					<ProjectButton name='Solidworks' />
					<ProjectButton name='Mechanical' />
				</div>
				<div id="search">
					<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search by Date, Title, or Text" title="Type to search" />
				</div>
			</div>
			<div id="projectsGoHere">
				{projectData
					? projectData.map((data, key) => 
					<ProjectIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} archive={data.archive} />)
					: null
				}
			</div>
		</div>
	);
}
