"use client"

import { Title,  Flex, Stack, Text, Badge, Group, Accordion, Skeleton, Table } from "@mantine/core";
import { useParams } from 'next/navigation'
import winesData, { wineInterface } from "../../../const/wines";
import Image from "next/image";
import { Suspense } from "react";


export default function WinePage() {
    const params = useParams<{ id: string }>()

    const wine: wineInterface | undefined = winesData.find((w) => w.id === params.id);
    
    if (!wine) {
        return <Text>Vin non trouvé</Text>;
    }

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
                        alt={wine.name}
                        style={{ objectFit: 'contain' }}
                        width={180}
                        height={400}
                        priority
                    />
                </Suspense>
                
                <Stack gap="xs">
                    <Title order={1} c="brandBordeux">{wine.name}</Title>
                    <Text>{wine.mention}</Text>
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
                <Accordion.Item value="Informations du vin" px="inherit">
                    <Accordion.Control px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>Informations du vin</Title>
                    </Accordion.Control>
                    <Accordion.Panel px="inherit">
                        <Table verticalSpacing="xs" withColumnBorders={false}>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td><Text fw={600}>Lieu:</Text></Table.Td>
                                    <Table.Td><Text>{wine.location}</Text></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td><Text fw={600}>Cépage:</Text></Table.Td>
                                    <Table.Td><Text>{wine.variety}</Text></Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
    
                <Accordion.Item value="Accords-met-vin">
                    <Accordion.Control px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>Accords-met-vin</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        {wine.accords.map((accord) => (
                            <Text key={accord} mb="sm">-{accord}</Text>
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
}