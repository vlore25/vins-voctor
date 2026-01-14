"use client"

import { Container, Title, Loader, Flex, Stack, Text, Badge, Box, Group, Accordion, Anchor, Breadcrumbs, Skeleton } from "@mantine/core";
import { useParams } from 'next/navigation'
import winesData from "../../const/wines";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import { Suspense } from "react";

export default function WinePage() {

    const params = useParams<{ id: string }>()
    const wine = winesData.find((w) => w.id === params.id);
    console.log(params.id);
    if (!params.id) {
        return <Container my="xl"><Loader /></Container>;
    }

    if (!wine) {
        return <Container my="xl"><Title>Vin non trouvé</Title></Container>;
    }

    const breadcrumbs = [
        { title: ' Accueil', href: '/' },
        { title: 'Les cuvées', href: '/vins' },
        { title: wine.name, href: '' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <Container my="xl">
            <Breadcrumbs separator={<HiChevronRight />} separatorMargin="md" mb="md">
                {breadcrumbs}
            </Breadcrumbs>
            <Flex
                direction={{ base: "column", sm: "row" }}
                align="center"
                gap={{ base: 'xl', sm: '5rem' }}
            >
                <Suspense fallback={<Skeleton />}>
                    <Image
                        src={wine.img}
                        alt={wine.name}
                        style={{ objectFit: 'contain' }}
                        width={180}
                        height={400}
                    />
                </Suspense>
                <Stack gap="xs">
                    <Title order={1} c="brandBordeux">{wine.name}</Title>
                    <Badge radius={0} color={wine.badgeColor} size="lg" autoContrast>{wine.type}</Badge>
                    <Text mt={{ base: "0", lg: "lg" }}>{wine.description}</Text>
                </Stack>
            </Flex>
            <Stack my={{ base: "md", lg: "md" }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }}>Profil du vin</Title>
                <Group my={{ base: "0", lg: "0" }} wrap="nowrap">
                    {wine.tags.map((tag) => (
                        <Badge radius={0} size="lg" key={tag} mr="0" variant="outline">{tag}</Badge>
                    ))}
                </Group>
            </Stack>
            <Accordion px={0}>
                <Accordion.Item value="Informatins du vin" px="inherit">
                    <Accordion.Control px="inherit"><Title fz={{ base: "1.4em", lg: "1.8em" }}>Informations du vin</Title></Accordion.Control>
                    <Accordion.Panel px="inherit">
                        <Group>
                        <Stack>
                            <Text fw={600}>Region:</Text>                          
                            <Text fw={600}>Cépage:</Text>                           
                            <Text fw={600}>Alcool:</Text>              
                            <Text fw={600}>Contenance:</Text>                    
                            <Text fw={600}>Sulfite:</Text>
                        </Stack>
                        <Stack>
                            <Text>{wine.location}</Text>
                            <Text>{wine.variety}</Text>
                            <Text> </Text>
                            <Text> </Text>
                            <Text> </Text>
                        </Stack>
                        </Group>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Accords-met-vin">
                    <Accordion.Control px="inherit"><Title fz={{ base: "1.4em", lg: "1.8em" }}>Accords-met-vin</Title></Accordion.Control>
                    <Accordion.Panel>
                        {wine.accords.map((accord) => (
                            <Text key={accord} mb="sm">-{accord}</Text>
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}