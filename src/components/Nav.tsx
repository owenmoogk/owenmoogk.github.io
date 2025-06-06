import {
  ActionIcon,
  Box,
  Burger,
  Drawer,
  Flex,
  Menu,
  SimpleGrid,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaChevronDown, FaRegMoon } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router';

import type { Link as LinkType } from '../types';
import classes from './HeaderMenu.module.css';
// import { IconChevronDown } from '@tabler/icons-react';

const links: LinkType[] = [
  { link: '/', label: 'Home' },
  {
    link: '#',
    label: 'Work',
    links: [
      { link: '/projects', label: 'Projects' },
      { link: '/work', label: 'Experience' },
    ],
  },
  { link: '/notes', label: 'Notes' },
  {
    link: '#',
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

export default function Nav() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const colorScheme = useMantineColorScheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link
        key={item.label}
        to={item.link}
        style={{ borderRadius: '5px' }}
        onClick={close}
      >
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
      </Link>
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
        onClick={close}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <SimpleGrid
        cols={3}
        className={classes.header}
        display={{ base: 'none', sm: 'grid' }}
      >
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
        >
          <ActionIcon
            onClick={colorScheme.toggleColorScheme}
            variant="transparent"
            color="var(--mantine-color-text)"
          >
            <FaRegMoon size="1.25em" />
          </ActionIcon>
        </Flex>
      </SimpleGrid>
      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="sm"
        size="90%"
        withCloseButton={false}
      >
        <Box pos={'absolute'} right={0} top={0} p="xl" onClick={close}>
          <IoIosClose size={40} />
        </Box>
        <Stack h="calc(100vh - 66px)" justify="space-between">
          <Stack>
            <Title order={2}>Owen Moogk</Title>
            {items}
          </Stack>
          <Flex
            id="darkmode"
            justify="end"
            onClick={colorScheme.toggleColorScheme}
          >
            <FaRegMoon size="1.25em" />
          </Flex>
        </Stack>
      </Drawer>
      <Box
        hiddenFrom="sm"
        pos="fixed"
        top={10}
        left={10}
        p={3}
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '5px',
        }}
        w="fit-content"
        h="fit-content"
      >
        <Burger opened={opened} onClick={toggle} />
      </Box>
    </>
  );
}
