"use client";

import { Badge, Button, Card, SimpleGrid, Group, Image, Stack, Title, Container, Text, Anchor, Breadcrumbs } from "@mantine/core";
import winesData from "../const/wines";
import { MdLocationOn } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function WinesPage() {
    const items = [
        { title: ' Accueil', href: '/' },
        { title: 'Les cuvées', href: '' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const cards = winesData.map((wine) => {
        return (
            <Card shadow='sm' withBorder key={wine.id}>
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
        <Container my="xl">
            <Breadcrumbs separator={<HiChevronRight />} separatorMargin="md" mb="md">
                {items}
            </Breadcrumbs>
            <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>Les cuvées chez <Text c="brandBordeux" span inherit>Vins Voctor</Text></Title>
            </Stack>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing="xl"
                my="xl"
            >
                {cards}
            </SimpleGrid>
        </Container>
    );
}