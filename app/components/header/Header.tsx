"use client";

import { Burger, Button, Container, Drawer, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import links from '../../const/links';
import classes from './Header.module.css';

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  // Fonction pour générer les liens afin de les réutiliser dans le Desktop et le Mobile
  const renderLinks = (isMobile: boolean = false) => 
    links.map((link) => {
      if (link.label === 'Contact') {
        return (
          <Button
            key={link.label}
            component={Link}
            href={link.link}
            variant="light"
            radius="md" // Un peu plus doux pour un site de vin
            size={isMobile ? "lg" : "md"}
            onClick={close} // Ferme le drawer au clic
            fullWidth={isMobile}
          >
            {link.label}
          </Button>
        );
      }

      return (
        <Link
          key={link.label}
          className={classes.link}
          href={link.link}
          onClick={close} // Ferme le drawer au clic
        >
          {link.label}
        </Link>
      );
    });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <Flex align="center" justify="space-between" h={80}>
          <Logo
            titleProps={{ order: 3 }}
            logoProps={{ w: '60px' }} // Ajusté pour l'équilibre visuel
          />

          {/* Navigation Desktop */}
          <Flex gap="xl" visibleFrom="sm" align="center">
            {renderLinks()}
          </Flex>

          {/* Menu Mobile (Burger) */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Flex>
      </Container>

      {/* Rendu du Drawer pour le mobile */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="md" mt="xl">
          {renderLinks(true)}
        </Stack>
      </Drawer>
    </header>
  );
}