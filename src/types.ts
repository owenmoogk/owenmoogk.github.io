export type Link = {
  label: string;
} & ({ link: string; links?: never } | { link?: never; links: Link[] });
