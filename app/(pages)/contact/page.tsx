"use client"

import { ActionIcon, Container, Flex, Grid, GridCol, Stack, Text, Title } from "@mantine/core";
import EmailForm from "../../components/ContactCompt/EmailForm";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import classes from './page.module.css';
import dynamic from "next/dynamic";
const MyAwesomeMap = dynamic(() => import("../../components/Map/Map"), { ssr:false, loading: () => <div style={{ height: '400px', background: '#e0e0e0' }} />}
)


export default function Contactpage() {
    const socialLinks = [
        { link: 'https://www.instagram.com/vins_voctor/?hl=en', label: 'Instagram', icon: <IconBrandInstagram /> },
        { link: 'https://www.facebook.com/VinsVoctor/', label: 'Facebook', icon: <IconBrandFacebook /> },
        { link: 'https://wa.me/33658971418', label: 'Whatsapp', icon: <IconBrandWhatsapp /> }
    ];

    const social = socialLinks.map((item) => (

        <Link key={item.label} href={item.link} className={classes.link} target="_blank">
            <Flex align="center" gap="sm">
                <ActionIcon size="lg" variant="subtle">
                    {item.icon}
                </ActionIcon>
                <Text size="lg">{item.label}</Text>
            </Flex>
        </Link>
    ));

    return (
        <>
            <Grid mb="xl">
                <GridCol span={{ base: 12, lg: 6 }}>
                    <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400} mb="md">
                        Mes liens sociaux
                    </Title>
                    <Stack gap="sm">
                        {social}
                    </Stack>
                </GridCol>

                <GridCol span={{ base: 12, lg: 6 }}>
                    <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400} mb="md">
                        Me contacter
                    </Title>
                    <EmailForm />
                </GridCol>
            </Grid >
            <Stack mt="xl">
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>
                    Me trouver
                </Title>
                <div style={{ 
                    height: '250px',
                    width: '100%', 
                    borderRadius: '16px', 
                    overflow: 'hidden',
                    border: '1px solid #eee' 
                }}>
                    <MyAwesomeMap />
                </div>
            </Stack>
        </>
    );
}