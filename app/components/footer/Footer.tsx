"use client" // Important pour les hooks de traduction
import { ActionIcon, Container, Group, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import links from '../../const/headerLinks';
import socialLinks from '../../const/socialLinks';
import { FaExternalLinkAlt } from 'react-icons/fa';
// 2. IMPORT DU HOOK DE TRADUCTION
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const YearNow = new Date().getFullYear()

export function Footer() {
    // 3. RECUPERATION DES TRADUCTIONS
    const tNav = useTranslations('Navigation'); // Pour les liens du menu
    const tFooter = useTranslations('Footer');  // Pour les textes spécifiques au footer

    const siteMap = links.map((link) => {
        return (
            <Link key={link.label} href={link.link} className={classes.link}>
                {/* Traduction du label (home, wines, etc.) */}
                {tNav(link.label)}
            </Link>
        )
    });

    const social = socialLinks.map((link) => {
        return (
            <ActionIcon key={link.label} size="lg" color="gray" variant="subtle">
                <Link href={link.link} className={classes.link} target="_blank">
                    {link.icon}
                </Link>
            </ActionIcon>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo
                        titleProps={{ order: 3 }}
                        logoProps={{ w: '70px' }}
                    />
                    <Text size="xs" c="dimmed" ta="center" className={classes.description}>
                        {tFooter('subtitle')}
                    </Text>
                </div>
                <div className={classes.groups}>
                    <Stack>
                        <Text>{tFooter('siteMap')}</Text>
                        {siteMap}
                    </Stack>
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                {/* Lien manuel vers la politique de confidentialité */}
                <Link href="/politique-de-confidentialite" className={classes.link}>
                    {tNav('privacy')}
                </Link>
                
                <Link href="https://www.victorlore.fr/" className={classes.link} target="_blank">
                    {tFooter('credits')} <span>Victor Loré. <FaExternalLinkAlt /> </span>
                </Link>
                
                <Text c="dimmed" size="sm" >
                    © {YearNow} vinsvoctor.com {tFooter('rights')}
                </Text>
                
                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    {social}
                </Group>
            </Container>
        </footer>
    );
}