export default interface Project {
  name: string;

  title: string;
  date: string;

  types: string[];
  featured: boolean;

  githubLink: string;
  externalLink: string;

  description: string;

  blocks: ProjectBlock[];
}

interface ProjectBlock {
  title: string;
  text: string;
  ul: string[];

  image: string;
  slider: string[];
  video: string[];
  render: string[];
  iframe: string[];
}