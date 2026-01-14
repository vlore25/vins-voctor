"use client";

import { useState } from 'react';
import { Burger, Drawer, Stack, Text } from '@mantine/core';
import Link from 'next/link';

export default function MobileMenu({ links }: { links: any[] }) {
  const [opened, setOpened] = useState(false);

  return (
    < >
      <Burger hiddenFrom="sm" opened={opened} onClick={() => setOpened(o => !o)} size="sm" />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="md"
      >
        <Stack
          gap="md"
          align="center"
          justify="center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              onClick={() => setOpened(false)}
            >
              <Text>
                {link.label}
              </Text>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}