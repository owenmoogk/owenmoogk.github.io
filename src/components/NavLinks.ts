import type { NavLink } from 'types';

export const links: NavLink[] = [
  { link: '/', label: 'Home' },
  {
    label: 'Work',
    links: [
      { link: '/projects', label: 'Projects' },
      { link: '/work', label: 'Experience' },
    ],
  },
  // { link: '/notes', label: 'Notes' },
  {
    label: 'Music',
    links: [
      { link: '/music/piano', label: 'Piano' },
      { link: '/music/favorites', label: 'My Favorites' },
    ],
  },
  // {
  //   label: 'Travel',
  //   links: [
  //     { link: '/adventures', label: 'Adventures' },
  //     { link: '/memories', label: 'Memories' },
  //   ],
  // },
  { link: '/contact', label: 'Contact' },
];
