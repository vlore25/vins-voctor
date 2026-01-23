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
  const menuId = 'mobile-navigation-menu';

  return (
    <>
      <Burger
        hiddenFrom="md"
        opened={opened}
        onClick={() => setOpened(o => !o)}
        color={scrolled ? 'black' : 'white'}
        aria-label={opened ? t('closeMenu') : t('openMenu')} 
        aria-expanded={opened} 
        aria-controls={menuId} 
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t('menuTitle')}
        padding="md"
        zIndex={9999}
        id={menuId} 
        trapFocus={true}
        closeButtonProps={{ 'aria-label': t('closeMenu') }}
      >
        <nav role="navigation" aria-label={t('mobileMenuLabel')}>
          {/* On transforme le Stack en <ul> pour la sémantique de liste */}
          <Stack 
            gap="md" 
            align="center" 
            justify="center" 
            component="ul" 
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            {links.map((link) => (
              <li key={link.label} style={{ width: '100%', textAlign: 'center' }}>
                <Link
                  className={classes.link}
                  href={link.link}
                  onClick={() => setOpened(false)}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
            <li>
               <LanguageButton />
            </li>
          </Stack>
        </nav>
      </Drawer>
    </>
  );
}