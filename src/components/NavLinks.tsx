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
  { link: '/notes', label: 'Notes' },
  {
    label: 'Music',
    links: [
      { link: '/music/piano', label: 'Piano' },
      { link: '/music/favorites', label: 'My Favorites' },
    ],
  },
  // // TODO: This should have subpages
  // {
  //   link: '#',
  //   label: 'Adventures',
  //   links: [
  //     { link: '/adventures', label: 'Travels' },
  //     { link: '/memories', label: 'Memories' },
  //   ],
  // },
  { link: '/contact', label: 'Contact' },
];
