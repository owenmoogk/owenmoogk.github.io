import { useState, useEffect } from 'react';
import ProjectIcon from './ProjectIcon';
import ProjectButton from './ProjectButton';
import Project from './ProjectInterface';

export default function ProjectDirectory() {

	const [projectData, setProjectData] = useState<Project[]>()

	function search(filter: string, buttonPressed?: boolean) {
		
		var searchString = (document.getElementById("projectSearchBox") as HTMLInputElement).value;

		if (buttonPressed){
			// make the button active
			var currentButton = document.getElementsByClassName("active")[0]
			currentButton.classList.remove('active')
			var currentButtonClass = "sort_" + filter
			var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
			chosenButton.classList.add('active')
		}

		if (filter === ""){
			filter = (document.getElementsByClassName("active")[0].getElementsByTagName("p")[0] as HTMLElement).innerText
		}

		filter = filter.toLowerCase()
		if (filter === "all") filter = ""
		
		var projectItems = document.getElementsByClassName("content") as HTMLCollectionOf<HTMLElement>;

		// will run through all the rows
		for (const tile of projectItems) {

			// get the title and type
			var title = (tile.getElementsByClassName("contentTitle")[0] as HTMLElement).innerText;
			var type = (tile.getElementsByClassName("type")[0] as HTMLElement).innerText;
			var desc = (tile.getElementsByClassName('contentDesc')[0] as HTMLElement).innerText;

			if (
				(title.toLowerCase().includes(searchString) || type.toLowerCase().includes(searchString) || desc.toLowerCase().includes(searchString)) && type.toLowerCase().includes(filter)
			) {
				tile.style.display = "";
			}
			else {
				tile.style.display = "none";
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
			<p className='subtitle'>All my projects. A lot of them are old, simple or just not worth showing off. But we all start somewhere.</p>
			<div id="sortingContainer">
				<div id='buttonContainer'>
					<ProjectButton name='All' search={search} />
					<ProjectButton name='Python' search={search} />
					<ProjectButton name='Javascript' search={search} />
					<ProjectButton name='React' search={search} />
					<ProjectButton name='Django' search={search} />
					<ProjectButton name='Solidworks' search={search} />
					<ProjectButton name='Mechanical' search={search} />
				</div>
				<input type="text" onKeyUp={() => search("")} placeholder="Search" title="Type to search" id="projectSearchBox" />
			</div>
			<div id='projectIcons'>
				{projectData
					? projectData.map((data, key) => <ProjectIcon data={data} key={key}/>)
					: null
				}
			</div>

		</div>
	);
}
