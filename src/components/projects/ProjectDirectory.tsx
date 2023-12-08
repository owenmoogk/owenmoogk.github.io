import { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon';
import ProjectButton from './ProjectButton';
import Project from './ProjectInterface';

export default function ProjectDirectory() {

	const [projectData, setProjectData] = useState<Project[]>()

	function search(filter: string) {
	
		filter = filter.toLowerCase()
		var projectItems = document.getElementsByClassName("content") as HTMLCollectionOf<HTMLElement>;
	
		// will run through all the rows
		for (const tile of projectItems) {
	
			// get the title and type
			var title = (tile.getElementsByClassName("contentTitle")[0] as HTMLElement).innerText;
			var type = (tile.getElementsByClassName("type")[0] as HTMLElement).innerText;
			var desc = (tile.getElementsByClassName('contentDesc')[0] as HTMLElement).innerText;
	
			if (title.toLowerCase().includes(filter) || type.toLowerCase().includes(filter) || desc.toLowerCase().includes(filter)) {
				tile.style.display = "";
			}
			else {
				tile.style.display = "none";
			}
		}
	}

	function filterProjects(filter: string) {

		var projectItems = document.getElementsByClassName("content") as HTMLCollectionOf<HTMLElement>;

		// make the button active
		var currentButton = document.getElementsByClassName("active")[0]
		currentButton.classList.remove('active')
		var currentButtonClass = "sort_" + filter
		var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
		chosenButton.classList.add('active')

		// will run through all the elements
		for (const tile of projectItems) {
			var type = (tile.getElementsByClassName('type')[0] as HTMLElement).innerText;

			if (type.toLowerCase().includes(filter.toLowerCase()) || filter === 'all'){
				tile.style.display = ''
			}
			else{
				tile.style.display = 'none'
			}
		}
	}

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
			<p className='subtitle'>All my other projects. A lot of them are old, simple or just not worth showing off. But we all start somewhere.</p>
			<div id="sortingContainer">
				<div id='buttonContainer'>
					<ProjectButton name='All' filterProjects={filterProjects} />
					<ProjectButton name='Python' filterProjects={filterProjects} />
					<ProjectButton name='Javascript' filterProjects={filterProjects} />
					<ProjectButton name='React' filterProjects={filterProjects} />
					<ProjectButton name='Django' filterProjects={filterProjects} />
					<ProjectButton name='Solidworks' filterProjects={filterProjects} />
					<ProjectButton name='Mechanical' filterProjects={filterProjects} />
				</div>
				<input type="text" onKeyUp={(e) => search((e.target as HTMLInputElement).value)} placeholder="Search" title="Type to search" />
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
