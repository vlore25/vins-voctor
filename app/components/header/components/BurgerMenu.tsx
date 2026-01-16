"use client";

import { useState } from 'react';
import { Burger, Drawer, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import classes from './BurgerMenu.module.css'

export default function MobileMenu({ links }: { links: any[] }) {
  const [opened, setOpened] = useState(false);

  return (
    < >
      <Burger hiddenFrom="sm" opened={opened} onClick={() => setOpened(o => !o)} size="sm" />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Navigation"
        padding="md"
        zIndex={9999}
      >
        <Stack gap="md" align="center" justify="center">
          {links.map((link) => (
            <Link
              className={classes.link} 
              key={link.label}
              href={link.link}
              onClick={() => setOpened(false)}
            >
                {link.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}