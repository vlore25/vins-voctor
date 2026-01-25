"use client"

import { ActionIcon, Flex, Grid, GridCol, Stack, Text, Title } from "@mantine/core";
// On utilise de préférence le Link de next-intl pour la cohérence
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import classes from './page.module.css';
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import EmailForm from "../../../components/ContactCompt/EmailForm";
import { Link } from "../../../../i18n/routing";

const Map = dynamic(() => import("../../../components/Map/Map"), { ssr: false, loading: () => <div style={{ height: '400px', background: '#e0e0e0',  zIndex: -1}} /> }
)

export default function Contactpage() {
    const t = useTranslations('ContactPage');

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
            <Grid mb="xl" gutter='xl'>
                <GridCol span={{ base: 12, lg: 6 }}>
                    <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400} mb="md">
                        {t('socialTitle')}
                    </Title>
                    <Stack gap="lg">
                        <Stack>
                            {social}
                        </Stack>
                        <div>
                            <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>
                                {t('findMeTitle')}
                            </Title>
                            <Link href={"https://www.google.com/maps/place/Vins+Voctor/@44.9635465,4.8486378,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5599630691f45:0x718f09f48203c92f!8m2!3d44.9635465!4d4.8486378!16s%2Fg%2F11y1y_bzc8?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"}
                                target="_blank"
                                className={classes.link}
                            >
                                <Text>{t('address')}</Text>
                            </Link>
                            <div style={{
                                height: '250px',
                                width: '100%',
                                borderRadius: '7px',
                                overflow: 'hidden',
                                border: '1px solid #eee'
                            }}>
                                <Map />
                            </div>
                        </div>
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 12, lg: 6 }}>
                    <Stack mb="md">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400} >
                            {t('contactMeTitle')}
                        </Title>
                        <Text>{t('message')}</Text>
                    </Stack>
                    <EmailForm />
                </GridCol>
            </Grid >
        </>
    );
}