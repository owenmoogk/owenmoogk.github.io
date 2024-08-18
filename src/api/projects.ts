import type { Project } from './types';

export async function fetchProjects() {

  const tmpProjectData: Project[] = [];

  const response = await fetch(process.env.PUBLIC_URL + '/assets/projectDirectory.json');
  const json: string[] = await response.json() as unknown as string[];
  const requests = [];
  for (const projectUrl of json) {
    requests.push(fetch(process.env.PUBLIC_URL + '/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
      .then(async response => response.json())
      .then(currentProjectData => {
        tmpProjectData.push({ ...currentProjectData, name: projectUrl });
      })
      .catch(() => console.log(projectUrl)));
  }

  await Promise.all(requests)
    .then(function () {
      // make sure they are in the proper order, sort by name
      tmpProjectData.sort((a, b) => {
        // return (projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
    });
  return tmpProjectData;
}
