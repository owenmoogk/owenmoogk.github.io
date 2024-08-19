import type { Project } from './types';

export async function fetchProjects() {

  const tmpProjectData: Project[] = [];
  const response = await fetch('/assets/projectDirectory.json');
  const json: string[] = await response.json() as unknown as string[];
  const requests = [];
  for (const projectUrl of json) {
    requests.push(fetch('/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
      .then(response => response.json() as unknown as Project)
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

export async function fetchProjectJSON(name: string) {
  const jsonLink = '/assets/projects/' + name + '/' + name + '.json';
  const response = await fetch(jsonLink);
  const json = await response.json() as Project;
  return json;
}

export async function fetchProjectMarkdown(name: string) {
  const mdLink = '/assets/projects/' + name + '/' + name + '.md';
  const response = await fetch(mdLink);
  const json = await response.text();
  return json;
}
