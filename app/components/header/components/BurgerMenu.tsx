"use client";

import { useState } from 'react';
import { Burger, Drawer, Stack } from '@mantine/core';
import classes from './BurgerMenu.module.css'
import LanguageButton from '../../LanguageButton/LanguageButton';
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

interface BurgerMenuProps {
  links: any[];
  scrolled: boolean;
}

export default function MobileMenu({ links, scrolled }: BurgerMenuProps) {

  const [opened, setOpened] = useState(false);
  const t = useTranslations('Navigation');

  return (
    <>
      <Burger hiddenFrom="sm" opened={opened} onClick={() => setOpened(o => !o)} color={scrolled ? 'black' : 'white'}/>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t('menuTitle')}
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

              {t(link.label)}
            </Link>
          ))}
          <LanguageButton />
        </Stack>
      </Drawer>
    </>
  );
}