import {
  Box,
  Burger,
  Flex,
  Menu,
  SimpleGrid,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaChevronDown, FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router';

import type { Link as LinkType } from '../types';
import classes from './HeaderMenu.module.css';
// import { IconChevronDown } from '@tabler/icons-react';

const links: LinkType[] = [
  { link: '/', label: 'Home' },
  { link: '/projects', label: 'Projects' },
  { link: '/work', label: 'Work' },
  { link: '/contact', label: 'Contact' },
  // {
  //   link: '#2',
  //   label: 'Support',
  //   links: [
  //     { link: '/faq', label: 'FAQ' },
  //     { link: '/demo', label: 'Book a demo' },
  //     { link: '/forums', label: 'Forums' },
  //   ],
  // },
];

export function Nav() {
  const [opened, { toggle }] = useDisclosure(false);

  const colorScheme = useMantineColorScheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Flex align="end">
                <span className={classes.linkLabel}>{link.label}</span>
                <FaChevronDown size={12} />
              </Flex>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        style={{ borderRadius: '5px' }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <SimpleGrid className={classes.header} cols={3}>
      <Box />
      <Flex justify="center" align="center">
        {items}
      </Flex>
      <Flex
        id="darkmode"
        mx="xl"
        align="center"
        justify="end"
        className="navlink"
        onClick={colorScheme.toggleColorScheme}
      >
        {colorScheme.colorScheme === 'dark'}
        <FaRegMoon size="1.25em" />
      </Flex>

      <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
    </SimpleGrid>
  );
}
