import { useState, useEffect } from "react";
import Project from './projects/ProjectInterface';
import { Helmet } from "react-helmet";
import global from "../global/global.json"
const { homepage } = global

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
            <li><a href="/assets">/assets</a></li>
            <li><a href="/projects/directory">/projects/directory</a></li>
            <br />
            {projectData.map((project) => {
              // don't include external links in sitemap (eg. Janik's Cat Feeder)
              if (project.externalLink && !project.externalLink.includes("https://")){
                var link = homepage + project.externalLink
                var linkDisplay = project.externalLink
                if (linkDisplay.endsWith("/")) linkDisplay = linkDisplay.slice(0,-1);
                if (!linkDisplay.startsWith("/")) linkDisplay = "/" + linkDisplay
                return(<li><a href={link} target="_blank" rel="noreferrer">{linkDisplay}</a></li>)
              }
			  return null
            })}
          </ul>
        </div>
        : null
      }
    </div>
  );
}