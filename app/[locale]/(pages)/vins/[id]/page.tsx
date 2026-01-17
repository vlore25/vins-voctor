"use client"

import { Title, Flex, Stack, Text, Badge, Group, Accordion, Skeleton, Table } from "@mantine/core";
import { useParams } from 'next/navigation'
// Assurez-vous que l'import correspond à votre fichier wines.tsx simplifié
import Image from "next/image";
import { Suspense } from "react";
import { useTranslations } from "next-intl";
import winesData from "../../../../const/wines";

export default function WinePage() {
    const params = useParams<{ id: string }>()
    const tWines = useTranslations('Wines');     
    const tPage = useTranslations('WinesPage');   

    const wine = winesData.find((w) => w.id === params.id);
    
    if (!wine) {
        return <Text>{tPage('notFound')}</Text>;
    }

    // Récupération des tableaux via .raw() avec typage forcé
    const tags = tWines.raw(`${wine.id}.tags`) as string[];
    const accords = tWines.raw(`${wine.id}.accords`) as string[];

    return (
        <>
            <Flex
                direction={{ base: "column", sm: "row" }}
                align="center"
                gap={{ base: 'xl', sm: '5rem' }}
            >
                <Suspense fallback={<Skeleton height={400} width={180} />}>
                    <Image
                        src={wine.img}
                        alt={tWines(`${wine.id}.name`)} // Traduction du nom
                        style={{ objectFit: 'contain' }}
                        width={180}
                        height={400}
                        priority
                    />
                </Suspense>
                
                <Stack gap="xs">
                    <Title order={1} c="brandBordeux">{tWines(`${wine.id}.name`)}</Title>
                    <Text>{tWines(`${wine.id}.mention`)}</Text>
                    
                    <Badge radius={0} color={wine.badgeColor} size="lg" autoContrast>
                        {tWines(`${wine.id}.type`)}
                    </Badge>
                    
                    <Text mt={{ base: "0", lg: "lg" }}>
                        {tWines(`${wine.id}.description`)}
                    </Text>
                </Stack>
            </Flex>

            <Stack my={{ base: "md", lg: "md" }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('profile')}</Title>
                <Group my={{ base: "0", lg: "0" }} wrap="nowrap">
                    {/* On utilise notre constante tags récupérée plus haut */}
                    {tags.map((tag) => (
                        <Badge radius={0} size="lg" key={tag} mr="0" variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </Group>
            </Stack>

            <Accordion px={0} defaultValue="Informations du vin">
                {/* Section Informations */}
                <Accordion.Item value="Informations du vin" px="inherit">
                    <Accordion.Control px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('infos')}</Title>
                    </Accordion.Control>
                    <Accordion.Panel px="inherit">
                        <Table verticalSpacing="xs" withColumnBorders={false} withRowBorders={false}>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td><Text fw={600}>{tPage('location')}</Text></Table.Td>
                                    <Table.Td><Text>{tWines(`${wine.id}.location`)}</Text></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td><Text fw={600}>{tPage('variety')}</Text></Table.Td>
                                    <Table.Td><Text>{tWines(`${wine.id}.variety`)}</Text></Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
    
                {/* Section Accords */}
                <Accordion.Item value="Accords-met-vin">
                    <Accordion.Control px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('pairings')}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        {/* On utilise notre constante accords récupérée plus haut */}
                        {accords.map((accord) => (
                            <Text key={accord} mb="sm">-{accord}</Text>
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
}