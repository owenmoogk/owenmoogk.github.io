import type { NavLink } from 'types';

export const links: NavLink[] = [
  { link: '/', label: 'Home' },
  {
    label: 'Work',
    subLinks: [
      { link: '/projects', label: 'Projects' },
      { link: '/work', label: 'Experience' },
    ],
  },
  {
    label: 'Collections',
    subLinks: [
      { link: '/notes', label: 'Notes' },
      { link: '/notes/collections', label: 'Collections' },
      { link: '/music/piano', label: 'Piano' },
      { link: '/music/favorites', label: 'Spotify' },
    ],
  },
  {
    label: 'Travel',
    subLinks: [
      { link: '/memories', label: 'Memories' },
      { link: '/adventures', label: 'Adventures' },
    ],
  },
  { link: '/contact', label: 'Contact' },
];
