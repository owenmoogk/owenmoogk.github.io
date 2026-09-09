import type { NavLink } from 'types';

export const links: NavLink[] = [
  { link: '/', label: 'Home' },
  {
    link: '/projects',
    label: 'Projects',
  },
  {
    link: '/work',
    label: 'Work',
  },
  {
    label: 'Music',
    subLinks: [
      { link: '/music/piano', label: 'Piano' },
      { link: '/music/favorites', label: 'Spotify' },
    ],
  },
  // {
  //   label: 'Travel',
  //   subLinks: [
  //     { link: '/memories', label: 'Memories' },
  //     { link: '/adventures', label: 'Adventures' },
  //   ],
  // },
  { link: '/contact', label: 'Contact' },
];
