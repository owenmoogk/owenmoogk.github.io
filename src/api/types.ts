export type Project = {
  name: string;

  title: string;
  date: string;

  types: string[];
  featured: boolean;

  githubLink: string;
  externalLink: string;

  description: string;
};

export type StringDictionary = Record<string, string>;

export type UnknownDictionary = Record<string, unknown>;
