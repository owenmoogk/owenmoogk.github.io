export type NavLink = {
  label: string;
} & (
  | { link: string; subLinks?: never }
  | { link?: never; subLinks: NavLink[] }
);
