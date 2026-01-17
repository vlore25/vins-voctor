"use client";

import { useState } from 'react';
import { Burger, Drawer, Stack } from '@mantine/core';
// 1. IMPORT DU LINK PERSONNALISÉ
import classes from './BurgerMenu.module.css'
import LanguageButton from '../../LanguageButton/LanguageButton';
// 2. IMPORT DU HOOK
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

export default function MobileMenu({ links }: { links: any[] }) {
  const [opened, setOpened] = useState(false);
  // 3. RECUPERATION DES TRADUCTIONS
  const t = useTranslations('Navigation');

  return (
    <>
      <Burger hiddenFrom="sm" opened={opened} onClick={() => setOpened(o => !o)} size="sm" />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // 4. Traduction du titre du menu
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
                {/* 5. Traduction du lien (home, wines...) */}
                {t(link.label)}
            </Link>
          ))}
          <LanguageButton />
        </Stack>
      </Drawer>
    </>
  );
}