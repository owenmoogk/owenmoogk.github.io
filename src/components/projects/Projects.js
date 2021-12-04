import React, { useState, useEffect } from 'react';
import ProjectButton from './ProjectButton';
import FeaturedIcon from './FeaturedIcon';

export default function ProjectPage() {

	const [projectData, setProjectData] = useState()

	function search(filter) {

		filter = filter.toLowerCase()
		var projectItems = document.getElementsByClassName("featuredIcon");

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

	// function that filters by the type of entry
	function filterProjects(filter) {

		var projectItems = document.getElementsByClassName("featuredIcon");

		// make the button active
		var currentButton = document.getElementsByClassName("active")[0]
		currentButton.classList.remove('active')
		var currentButtonClass = "sort_" + filter
		var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
		chosenButton.classList.add('active')

		// will run through all the elements
		for (const tile of projectItems) {
			var type = tile.getElementsByClassName('type')[0].innerText;

			if (type.toLowerCase().includes(filter.toLowerCase()) || filter === 'all'){
				tile.style.display = ''
			}
			else{
				tile.style.display = 'none'
			}
		}
	}

	function fetchProjects() {
		var tmpProjectData = []
		fetch(process.env.PUBLIC_URL + '/assets/projectDirectory.json')
			.then(response => response.json())
			.then(projectUrls => {
				var requests = []
				for (const projectUrl of projectUrls) {
					requests.push(fetch(process.env.PUBLIC_URL + '/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
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
			<p className="title" id='projectTitle'>Projects</p>
			<p className='subtitle'>These are some of my favorite projects. For a complete list, have a look <a href='/projects/directory'>here</a>.</p>
			<div id="sortingContainer">
				<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search" title="Type to search" />
				<ProjectButton name='All' filterProjects={filterProjects} />
				<ProjectButton name='Python' filterProjects={filterProjects} />
				<ProjectButton name='Javascript' filterProjects={filterProjects} />
				<ProjectButton name='React' filterProjects={filterProjects} />
				<ProjectButton name='Django' filterProjects={filterProjects} />
				<ProjectButton name='Solidworks' filterProjects={filterProjects} />
				<ProjectButton name='Mechanical' filterProjects={filterProjects} />
			</div>

			<div id='featuredProjects'>
				<div id='featuredContainer'>
					{projectData
						? projectData.map((data, key) => {
							if (data.featured) {
								return (
									<FeaturedIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} description={data.description} />
								)
							}
							return (null)
						})
						: null
					}
				</div>
			</div>
		</div>
	);
}
