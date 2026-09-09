import {
  ActionIcon,
  AppShell,
  Box,
  CloseButton,
  Flex,
  Group,
  NavLink,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router';

import { links } from './NavLinks';

export default function Nav({ close }: { close: () => void }) {
  const { toggleColorScheme } = useMantineColorScheme();

  // Render vertical nav links for both desktop and mobile
  const navItems = links.map((link) => {
    if (link.subLinks) {
      return (
        <NavLink key={link.label} label={link.label} childrenOffset={16}>
          {link.subLinks.map((item) =>
            item.link ? (
              <NavLink
                key={item.label}
                component={Link}
                to={item.link}
                label={item.label}
                onClick={close}
              />
            ) : null
          )}
        </NavLink>
      );
    }

    return (
      <NavLink
        key={link.label}
        component={Link}
        to={link.link}
        label={link.label}
        onClick={close}
      />
    );
  });

  return (
    <AppShell.Navbar p="md">
      <Stack justify="space-between" h="100%">
        <Stack gap={0}>
          <Group justify="flex-end" hiddenFrom="md" mb="md">
            <CloseButton onClick={close} size="md" />
          </Group>
          <Box mt={30} visibleFrom="md" />
          {navItems}
        </Stack>

        <Flex align="center" pt="md">
          <ActionIcon onClick={toggleColorScheme} variant="default" size="lg">
            <FaRegMoon size={16} />
          </ActionIcon>
        </Flex>
      </Stack>
    </AppShell.Navbar>
  );
}
