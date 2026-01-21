"use client";

import '@mantine/carousel/styles.css';
import { Anchor, Badge, Button, Card, Flex, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import classes from './WinesCards.module.css';
import wines from '../../../const/wines';
import { LuGrape } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

export default function WinesCards() {
    const t = useTranslations('HomePage.WineCards');
    const tWines = useTranslations('Wines');

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const slides = wines.map((wine) => {
        return (
            <CarouselSlide key={wine.id}>
                <Card shadow='sm' padding='xl' withBorder bg="#F8F8F8">
                    <Card.Section className={classes.section} >
                        <Image
                            src={wine.img}
                            height={250}
                            // On récupère le nom traduit pour le ALT
                            alt={tWines(`${wine.id}.name`)}
                            fit='contain'
                        />
                    </Card.Section>
                    <Stack px="md" pb="md">
                        <Card.Section className={classes.section} mt="md">
                            <Stack gap="xs">
                                {/* TRADUCTION DU NOM */}
                                <Title c="brandBordeux" order={4} textWrap="nowrap" fw={300}>
                                    {tWines(`${wine.id}.name`)}
                                </Title>

                                {/* TRADUCTION DE LA MENTION */}
                                <Text>
                                    {tWines(`${wine.id}.mention`)}
                                </Text>

                                {/* TRADUCTION DU TYPE */}
                                <Flex align="center" gap="sm">
                                    <Badge color={wine.badgeColor} radius="sm" autoContrast size='lg' >
                                        {tWines(`${wine.id}.type`)}
                                    </Badge>
                                    {wine.bio &&
                                        <Image
                                            height={25}
                                            w="auto"
                                            fit="contain"
                                            src="/logo/EU_Organic_Logo_Colour_54x36mm.svg" alt="Eurofeuille"></Image>}
                                </Flex>
                                {/* TRADUCTION DU CEPAGE (VARIETY) */}
                                <Badge variant='transparent' leftSection={<LuGrape />} radius="sm" size='lg' p="0">
                                    {tWines(`${wine.id}.variety`)}
                                </Badge>
                            </Stack>
                            <Group mt="lg">
                                <Button component={Link} href={`/vins/${wine.id}`} radius={0}>
                                    {t('cardBtn')}
                                </Button>
                            </Group>
                        </Card.Section>
                    </Stack>
                </Card>
            </CarouselSlide>
        );
    });

    return (
        <>
            <Stack>
                <Stack mb="lg">
                    <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>{t('title')}</Title>
                    <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>{t('description1')}</Text>
                    <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>{t('description2')}</Text>
                </Stack>
                <Carousel
                    slideSize={{ base: "90%", lg: "30%" }}
                    height="100%"
                    slideGap="xl"
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={() => autoplay.current.play()}
                    emblaOptions={{
                        loop: true,
                        dragFree: false,
                        align: 'center'
                    }}>
                    {slides}
                </Carousel>
                <Group mt="xl" gap="xs">
                    <Text
                        component={Link}
                        href="/vins"
                        fz={{ base: "md", lg: "lg" }}
                        fw={700}
                        c={"brandBordeux"}
                    >
                        {t('footerLink')}
                    </Text>

                    <ThemeIcon variant="transparent">
                        <FaArrowRight />
                    </ThemeIcon>
                </Group>
            </Stack>
        </>
    );
}