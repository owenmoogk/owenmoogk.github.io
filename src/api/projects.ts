export type Project = {
  name: string;

  title: string;
  date: string;

  types: string[];
  featured?: boolean;

  githubLink?: string;
  externalLink?: string;

  description: string;
};

export async function fetchProjectJSON(name: string) {
  const jsonLink = '/assets/projects/' + name + '/' + name + '.json';
  const response = await fetch(jsonLink);
  const json = (await response.json()) as Project;
  return json;
}

export async function fetchProjectMarkdown(name: string) {
  const mdLink = '/assets/projects/' + name + '/' + name + '.md';
  const response = await fetch(mdLink);
  const json = await response.text();
  return json;
}
