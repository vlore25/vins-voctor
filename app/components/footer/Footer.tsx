
import { ActionIcon, Container, Group, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import links from '../../const/links';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

const YearNow = new Date().getFullYear()

export function Footer() {
    const siteMap = links.map((link) => {
        return (
            <Link key={link.label} href={link.link}>
                <Text
                    className={classes.link}
                >
                    {link.label}
                </Text>
            </Link>
        )
    });

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
                        {siteMap}
                    </Stack>
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm" >
                    © {YearNow} vinsvoctor.com tous droits réservés.
                </Text>
                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}