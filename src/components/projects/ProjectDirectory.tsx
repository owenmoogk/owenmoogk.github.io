import { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon';
import FilterButton from '../common/FilterButton';
import Project from './ProjectInterface';

export default function ProjectDirectory() {

	const [projectData, setProjectData] = useState<Project[]>()
	const [searchQuery, setSearchQuery] = useState<string>("")
	const [filter, setFilter] = useState<string>("")

	
	function fetchProjects() {
		var tmpProjectData: Project[] = [];
		fetch('/assets/projectDirectory.json')
			.then(response => response.json())
			.then(projectUrls => {
				var requests = []
				for (const projectUrl of projectUrls) {
					requests.push(fetch('/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
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
		<div className='main projectDirectoryPage' id='projectPage'>
			<p className="title" id='projectTitle'>Project Directory</p>
			<p className='subtitle'>All my projects. A lot of them are old, simple or just not worth showing off. But we all start somewhere.</p>
			<div id="sortingContainer">
				<div id='buttonContainer'>
					<FilterButton name='All' handle="" setFilter={setFilter} filter={filter}/>
					<FilterButton name='Python' setFilter={setFilter} filter={filter}/>
					<FilterButton name='Javascript' setFilter={setFilter} filter={filter}/>
					<FilterButton name='React' setFilter={setFilter} filter={filter}/>
					<FilterButton name='Django' setFilter={setFilter} filter={filter}/>
					<FilterButton name='Solidworks' setFilter={setFilter} filter={filter}/>
					<FilterButton name='Mechanical' setFilter={setFilter} filter={filter}/>
				</div>
				<input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search" title="Type to search" id="projectSearchBox" />
			</div>
			<div id='projectIcons'>
				{projectData
					? projectData.map((data, key) => {
						var dataTypes = data.types.map(item => item.toLowerCase())
							var searchQueryLower = searchQuery.toLowerCase()
							var matchesSearchQuery = 
								data.description.toLowerCase().indexOf(searchQueryLower) >= 0 ||
								data.name.toLowerCase().indexOf(searchQueryLower) >= 0 ||
								data.title.toLowerCase().indexOf(searchQueryLower) >= 0

							if ((dataTypes.indexOf(filter) >= 0 || filter === "") && (matchesSearchQuery || searchQueryLower === "")) {
								return (
									<ProjectIcon data={data} key={key}/>
								)
							}
							return null
						})
					: null
				}
			</div>

		</div>
	);
}
