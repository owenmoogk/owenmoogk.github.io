import React, { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon'
import { search } from './projectSorting'
import ProjectButton from './ProjectButton';
import ArchiveButton from './ArchiveButton';
import FeaturedIcon from './FeaturedIcon';

export default function ProjectPage() {

	const [projectData, setProjectData] = useState()
	const [showArchive, setShowArchive] = useState(false)

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

			<div id='featuredProjects'>
				<h2>Featured Projects (some of my favorites)</h2>
				<div id='featuredContainer'>
					{projectData
						? projectData.map((data, key) => {
							if (data.featured) {
								return (
									<FeaturedIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} archive={data.archive} githubLink={data.githubLink} showArchive={showArchive} description={data.description} />
								)
							}
							return (null)
						})
						: null
					}
				</div>
			</div>
			
			<h2 style={{marginBottom: '0px'}}>All Projects</h2>
			<div id="sortingContainer">
				<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search" title="Type to search" />

				<ArchiveButton showArchive={showArchive} setShowArchive={setShowArchive} />
				{/* <ProjectButton name='All' /> */}
				{/* <ProjectButton name='Python' />
				<ProjectButton name='Javascript' />
				<ProjectButton name='React' />
				<ProjectButton name='Django' />
				<ProjectButton name='Solidworks' />
				<ProjectButton name='Mechanical' /> */}
			</div>
			<div id='projectIcons'>
				{projectData
					? projectData.map((data, key) =>
						<ProjectIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} archive={data.archive} githubLink={data.githubLink} showArchive={showArchive} description={data.description} />)
					: null
				}
			</div>

		</div>
	);
}
