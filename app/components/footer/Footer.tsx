"use client"
import { ActionIcon, Container, Group, Stack, Text, Title, SimpleGrid, Center, Flex } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import links from '../../const/headerLinks';
import socialLinks from '../../const/socialLinks';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';

const YearNow = new Date().getFullYear()

export function Footer() {
    const tNav = useTranslations('Navigation');
    const tFooter = useTranslations('Footer');

    const siteMap = links.map((link) => (
        <Link key={link.label} href={link.link} className={classes.link}>
            {tNav(link.label)}
        </Link>
    ));

    const social = socialLinks.map((link) => (
        <ActionIcon key={link.label} size="lg" color="gray" variant="subtle">
            <Link href={link.link} className={classes.link} target="_blank">
                {link.icon}
            </Link>
        </ActionIcon>
    ));

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">

                    <div className={classes.wrapper}>
                        <Logo
                            titleProps={{ order: 3 }}
                            logoProps={{ w: '70px' }}
                        />
                        <Text size="xs" c="dimmed" className={classes.description} ta={{base: "center", sm: "left"}}>
                            {tFooter('subtitle')}
                        </Text>
                    </div>

                    <div className={classes.wrapper}>
                        <Title order={4} mb="sm" className={classes.title}>{tFooter('siteMap')}</Title>
                        <Stack gap={4} align="flex-start" className={classes.stackLinks}>
                            {siteMap}
                        </Stack>
                    </div>

                    <div className={classes.wrapper}>
                        <Title order={4} mb="sm" className={classes.title}>{tFooter('socialTitle')}</Title>
                        <Group gap="xs" className={classes.social}>
                            {social}
                        </Group>
                    </div>
                </SimpleGrid>
            </Container>

            <Container className={classes.afterFooter}>
                <Flex gap={5} className={classes.legalGroup} direction={{base: "column", lg:"row"}} ta={{base: "center", lg:"left"}}>
                    <Link href="/mentions-legales" className={classes.link}>
                        {tNav('legal')}
                    </Link>
                    <Link href="/politique-de-confidentialite" className={classes.link}>
                        {tNav('privacy')}
                    </Link>
                </Flex>

                <Text c="dimmed" size="sm" ta="center">
                    © {YearNow} vinsvoctor.com {tFooter('rights')}
                </Text>

                <Group gap="xs" justify="center">
                    <Link href="https://www.victorlore.fr/" className={classes.link} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {tFooter('credits')} <span>Victor Loré. <FaExternalLinkAlt size={10} /></span>
                    </Link>
                </Group>
            </Container>
        </footer>
    );
}