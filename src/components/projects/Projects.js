import React, { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon'
import { search } from './projectSorting'
import ProjectButton from './ProjectButton';

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
		<div style={{ paddingTop: '100px' }}>
			<p className="title" id='projectTitle'>Projects</p>

			<div id='mainProjectPage'>
				<div id="sortingContainer">
					<div id='sticky'>
						<input type="text" onKeyUp={(e) => search(e.target.value)} placeholder="Search" title="Type to search" />
						<br />

						{/* archive button */}
						<span id='archiveButton' className="btn" style={{
							transition: '0.3s',
							border: showArchive ? '2px solid var(--textColor': '2px solid grey',

						}} onClick={() => setShowArchive(!showArchive)} >
							<p style={{
								color: showArchive ? 'var(--textColor)' : 'grey'
							}}>
								{
									showArchive
										? <svg style={{verticalAlign: '-0.125em'}} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112l6.82-8.69a.486.486 0 0 1 .04-.045z"/></g></svg>
										: <svg style={{verticalAlign: '-0.125em'}} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8L1.293 2.707a1 1 0 0 1 0-1.414z"/></g></svg>
								}
								&nbsp;
								Show Archived
							</p>
						</span>
						<ProjectButton name='All' />
						<ProjectButton name='Python' />
						<ProjectButton name='Javascript' />
						<ProjectButton name='React' />
						<ProjectButton name='Django' />
						<ProjectButton name='Solidworks' />
						<ProjectButton name='Mechanical' />
					</div>
				</div>

				<div id="projectsGoHere">
					{projectData
						? projectData.map((data, key) =>
							<ProjectIcon title={data.title} name={data.name} type={data.type} link={data.externalLink} key={key} archive={data.archive} githubLink={data.githubLink} showArchive={showArchive}/>)
						: null
					}
				</div>

			</div>
		</div>
	);
}
