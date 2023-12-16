import { useState, useEffect } from "react";
import Project from './projects/ProjectInterface';
import { Helmet } from "react-helmet";

export default function Sitemap(){

	const [projectData, setProjectData] = useState<Project[]>()

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
    <div className="main" id='resourcePage'>
      <Helmet>
        <title>{"Assets - Owen Moogk"}</title>
      </Helmet>
      <p className="title">Sitemap</p>
      <p className='subtitle'>All other subpages (that are worth looking at).</p>
      {projectData ?
        <div className="assets">
          <ul>
            {projectData.map((project, key) => {
              if (project.externalLink?.includes("https://owenmoogk.github.io")){
                var link = project.externalLink.replace("https://owenmoogk.github.io", "")
                if (link.endsWith("/")) link = link.slice(0,-1);
                return(<li><a href={project.externalLink} target="_blank" rel="noreferrer">{link}</a></li>)
              }
            })}
          </ul>
        </div>
        : null
      }
    </div>
  );
}