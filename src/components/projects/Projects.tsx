import { useState, useEffect } from 'react';
import FilterButton from '../common/FilterButton';
import FeaturedIcon from './FeaturedIcon';
import Project from "./ProjectInterface"

export default function ProjectPage() {

	const [projectData, setProjectData] = useState<Project[]>()
	const [filter, setFilter] = useState<string>("")

	function fetchProjects() {

		var tmpProjectData: Project[] = []

		fetch(process.env.PUBLIC_URL + '/assets/projectDirectory.json')
			.then(response => response.json())
			.then(projectUrls => {
				var requests = []
				for (const projectUrl of projectUrls) {
					requests.push(fetch(process.env.PUBLIC_URL + '/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
						.then(response => response.json())
						.then(currentProjectData => {
							tmpProjectData.push({ ...currentProjectData, name: projectUrl })
						})
						.catch(error => console.log(projectUrl))
					)
				}
				// once all the loading is done
				Promise.all(requests).then(function () {
					// make sure they are in the proper order, sort by name
					tmpProjectData.sort((a, b) => {
						// return (projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
						return new Date(b.date).valueOf() - new Date(a.date).valueOf()
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
				<div id='buttonContainer'>
					<FilterButton name='All' handle="" setFilter={setFilter} filter={filter} />
					<FilterButton name='Python' setFilter={setFilter} filter={filter} />
					<FilterButton name='Javascript' setFilter={setFilter} filter={filter} />
					<FilterButton name='React' setFilter={setFilter} filter={filter} />
					<FilterButton name='Solidworks' setFilter={setFilter} filter={filter} />
				</div>
			</div>

			<div id='featuredProjects'>
				<div id='featuredContainer'>
					{projectData
						? projectData.map((data, key) => {
							var dataTypes = data.types.map(item => item.toLowerCase())
							if (data.featured && (dataTypes.indexOf(filter) >= 0 || filter === "")) {
								return (
									<FeaturedIcon data={data} key={key} />
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
