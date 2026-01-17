"use client";

import { Badge, Button, Card, SimpleGrid, Group, Image, Stack, Title, Text } from "@mantine/core";
import { MdLocationOn } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
// 1. IMPORT DU LINK PERSONNALISÉ
import classes from "./page.module.css"
// 2. IMPORT DU HOOK DE TRADUCTION
import { useTranslations } from "next-intl";
import winesData from "../../../const/wines";
import { Link } from "../../../../i18n/routing";

export default function WinesPage() {
    // 3. INITIALISATION DES TRADUCTIONS
    const t = useTranslations('WinesPage'); // Pour le texte global de la page
    const tWines = useTranslations('Wines'); // Pour les données de chaque vin

    const cards = winesData.map((wine) => {
        return (
            <Card withBorder key={wine.id} shadow='sm' bg="#F8F8F8" className={classes.wineCard}>
                <Card.Section >
                    <Image
                        src={wine.img}
                        height={250}
                        alt={tWines(`${wine.id}.name`)} // Nom traduit
                        fit='contain'
                    />
                </Card.Section>
                <Stack px="md" pb="md">
                    <Card.Section mt="md">
                        <Stack gap="xs">
                            {/* NOM TRADUIT */}
                            <Title c="brandBordeux" order={4} textWrap="nowrap" fw={300}> 
                                {tWines(`${wine.id}.name`)}
                            </Title>
                            
                            {/* TYPE TRADUIT */}
                            <Badge color={wine.badgeColor} radius="sm" autoContrast size='lg' >
                                {tWines(`${wine.id}.type`)}
                            </Badge>
                            
                            {/* LOCATION TRADUIT */}
                            <Badge variant='transparent' leftSection={<MdLocationOn />} radius="sm" size='lg' p="0">
                                {tWines(`${wine.id}.location`)}
                            </Badge>
                            
                            {/* VARIETY (Cépage) TRADUIT */}
                            <Badge variant='transparent' leftSection={<LuGrape />} radius="sm" size='lg' p="0">
                                {tWines(`${wine.id}.variety`)}
                            </Badge>
                        </Stack>
                        <Group mt="lg">
                            {/* BOUTON TRADUIT + BON LIEN */}
                            <Button component={Link} href={`/vins/${wine.id}`} radius={0}>
                                {t('btn')}
                            </Button>
                        </Group>
                    </Card.Section>
                </Stack>
            </Card>
        );
    });

    return (
        <>
            <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>
                    {t.rich('title', {
                        brand: (chunks) => <Text c="brandBordeux" span inherit>{chunks}</Text>
                    })}
                </Title>
                <Text>
                    {t('description')}
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