
import { ActionIcon, Container, Group, Stack, Text, Title } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import links from '../../const/links';
import Link from 'next/link';
import socialLinks from '../../const/socialLinks';
import { FaExternalLinkAlt } from 'react-icons/fa';

const YearNow = new Date().getFullYear()

export function Footer() {
    const siteMap = links.map((link) => {
        return (
            <Link key={link.label} href={link.link} className={classes.link}>
                {link.label}
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
                        titleProps={{
                            order: 3
                        }}
                        logoProps={{
                            w: '70px'
                        }}
                    />
                    <Text size="xs" c="dimmed" ta="center" className={classes.description}>
                        Un monde atypique
                    </Text>
                </div>
                <div className={classes.groups}>
                    <Stack>
                        <Text>Map du site</Text>
                        {siteMap}
                    </Stack>
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                <div>
                    <Link href="https://www.victorlore.fr/" className={classes.link} target="_blank">Realisation du site par <span>Victor loré. <FaExternalLinkAlt /> </span></Link>

                    <div>
                        <Text c="dimmed" size="sm" >
                            © {YearNow} vinsvoctor.com tous droits réservés.
                        </Text>
                    </div>
                </div>
                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    {social}
                </Group>
            </Container>
        </footer>
    );
}