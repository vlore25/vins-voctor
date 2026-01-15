"use client";

import { Badge, Button, Card, SimpleGrid, Group, Image, Stack, Title, Container, Text, Anchor, Breadcrumbs } from "@mantine/core";
import winesData from "../../const/wines";
import { MdLocationOn } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function WinesPage() {

    const cards = winesData.map((wine) => {
        return (
            <Card withBorder key={wine.id} shadow='sm' bg="#F8F8F8">
                <Card.Section >
                    <Image
                        src={wine.img}
                        height={250}
                        alt={wine.name}
                        fit='contain'
                    />
                </Card.Section>
                <Stack px="md" pb="md">
                    <Card.Section mt="md">
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
        );
    });

    return (
        <>
            <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>Les cuvées chez <Text c="brandBordeux" span inherit>Vins Voctor</Text></Title>
                <Text>
                    Inspiré par la personnalité et l’identité émanant des produits artisanaux, Josimar s’est proposé de
                    produire des vins qui allient terroir et personnalité. Les caractéristiques principales qu’il recherche
                    dans ses vins sont l’énergie, la buvabilité, la finesse, la complexité et la longueur en bouche. En cave,
                    il travaille avec diverses méthodes de vinification traditionnelle et simple, avec des petits contenants,
                    peu de SO2 et aucun autre intrant-œnologique.
                </Text>
            </Stack>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing="xl"
                my="xl"
            >
                {cards}
            </SimpleGrid>
        </>
    );
}