import { Center, Drawer, Stack } from '@mantine/core';
import classes from './MobileDrawer.module.css'
import links from '../../const/headerLinks';
import Link from 'next/link';

export default function MobileDrawer({ opened, onClose }: any) {
    const drawerLinks = links.map((link) => {
        return (
            <Stack key={link.label} mt="xl">
                <Link
                    className={classes.link}
                    key={link.label}
                    href={link.link}
                    onClick={onClose}
                >
                    <Center fz="h5">
                    {link.label}
                    </Center>
                </Link>
            </Stack>
        );
    })
    return (
        <Drawer opened={opened} onClose={onClose} title="Navigation">
            {drawerLinks}
        </Drawer>
    );
}