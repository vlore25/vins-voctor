"use client";

import '@mantine/carousel/styles.css';
import { Anchor, Badge, Button, Card, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import classes from './WinesCards.module.css';
import wines from '../../../const/wines';
import { LuGrape } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Link from 'next/link';


export default function WinesCards() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    const slides = wines.map((wine) => {
        return (
            <CarouselSlide key={wine.id}>
                <Card shadow='sm' padding='xl' withBorder bg= "#F8F8F8">
                    <Card.Section className={classes.section} >
                        <Image
                            src={wine.img}
                            height={250}
                            alt={wine.name}
                            fit='contain'
                        />
                    </Card.Section>
                    <Stack px="md" pb="md">
                        <Card.Section className={classes.section} mt="md">
                            <Stack gap="xs">
                                <Title c="brandBordeux" order={4} textWrap="nowrap" fw={300}> {wine.name}</Title>
                                <Badge color={wine.badgeColor} radius="sm" autoContrast size='lg' >{wine.type}</Badge>
                                <Badge variant='transparent' leftSection={<MdLocationOn />} radius="sm" size='lg' p="0">{wine.location}</Badge>
                                <Badge variant='transparent' leftSection={<LuGrape />} radius="sm" size='lg' p="0">{wine.variety}</Badge>
                            </Stack>
                            <Group mt="lg">
                                <Button component={Link} href={`/vins/${wine.id}`} radius={0}>SAVOIR PLUS</Button>
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
                        <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>L'Artisanat au Cœur de la Bouteille.</Title>
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>Les <Text c="brandBordeux" span inherit>Vins Voctor</Text> sont de vins d'identité qui vont toujours vous raconter une histoire. Avec ces vins on a une démostration de forme et de contenu. L'une ne peut pas exister sans l'autre et le deux deoivent être qualitatifs.</Text>
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>Le liquide vous raconte le terroir et l'etiquette vous raconte l'histoire du vinificateur. Ensemble, le deux forment une identité.</Text>
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
                    <Group mt="10px" gap="xs">
                        <Anchor href="/vins" fz={{ base: "md", lg: "lg" }} fw={700}>CONNAÎTRE LES CUVÉES</Anchor>
                        <ThemeIcon variant="transparent">
                            <FaArrowRight />
                        </ThemeIcon>
                    </Group>
                </Stack>
        </>
    );
}