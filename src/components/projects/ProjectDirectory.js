import React, { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon'

export default function ProjectDirectory() {

	const [projectData, setProjectData] = useState()

	function search(filter) {
	
		filter = filter.toLowerCase()
		var projectItems = document.getElementsByClassName("content");
	
		// will run through all the rows
		for (const tile of projectItems) {
	
			// get the title and type
			var title = tile.getElementsByClassName("contentTitle")[0].innerText;
			var type = tile.getElementsByClassName("type")[0].innerText;
			var desc = tile.getElementsByClassName('contentDesc')[0].innerText;
	
			if (title.toLowerCase().includes(filter) || type.toLowerCase().includes(filter) || desc.toLowerCase().includes(filter)) {
				tile.style.display = "";
			}
			else {
				tile.style.display = "none";
			}
		}
	}

	function fetchProjects() {
		var tmpProjectData = []
		fetch('/assets/projectDirectory.json')
			.then(response => response.json())
			.then(projectUrls => {
				var requests = []
				for (const projectUrl of projectUrls) {
					requests.push(fetch('/assets/projects/' + projectUrl + '.json')
						.then(response => response.json())
						.then(currentProjectData => {
							tmpProjectData.push({ ...currentProjectData.meta, name: projectUrl })
						})
						.catch(error => console.log(projectUrl))
					)
				}
				// once all the loading is done
				Promise.all(requests).then(function () {
					// make sure they are in the proper order, sort by name
					tmpProjectData.sort((a, b) => {
						return (projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
					})

					setProjectData(tmpProjectData)
				})
			})
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div className='main' id='projectPage'>
			<p className="title" id='projectTitle'>Project Directory</p>
			<p className='subtitle'>All my other projects. A lot of them are old, simple and not worth showing off. But we all start somewhere.</p>
			<div id="sortingContainer">
				<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search" title="Type to search" />
			</div>
			<div id='projectIcons'>
				{projectData
					? projectData.map((data, key) => {
						if (!data.featured){
							return(
								<ProjectIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} githubLink={data.githubLink} description={data.description} />
							)
						}
						else{
							return(null)
						}
					})
					: null
				}
			</div>

		</div>
	);
}
