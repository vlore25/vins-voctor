import {  Center, Grid, GridCol, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Vigne() {
    const t = useTranslations('HomePage.Vigne');
    return (
        <Grid>
            <GridCol span={{ base: 12, lg: 7 }}>
                <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                    <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>{t('title')}</Title>
                    <Stack gap="md">
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                            {t('subtitle')}
                        </Text>

                        <Stack gap="xs">
                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                    {t('points.chateaubourg')}
                                </Text>
                            </Group>

                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                    {t('points.roussas')}
                                </Text>
                            </Group>

                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                {t('points.allan')}
                                </Text>
                            </Group>
                        </Stack>
                    </Stack>
                </Stack>
            </GridCol>
            <GridCol span={{ base: 12, lg: 5 }}>
                <Center>
                    <Stack>
                        <Image src="./cornas-map.svg" w={{ base: "100%", lg: "100%" }} />
                        <Text fz={{ base: "sm", lg: "lg" }} fw={500} ta="center">{t('mapLabel')}</Text>
                    </Stack>
                </Center>
            </GridCol>
        </Grid>
    );
}