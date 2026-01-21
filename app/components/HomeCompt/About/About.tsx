import { Anchor, Center, Container, Flex, Grid, GridCol, Group, Image, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import classes from './About.module.css';
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('HomePage.About');

    return (
        <Stack gap="xl">
            <div>
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>
                    {t('title')}
                    <Text c="brandBordeux" span inherit> {t('titleSpan')}</Text>
                </Title>
            </div>
            <Grid p={{ sm: 0, lg: "xs" }}>
                <GridCol span={{ base: 12, md: 8 }} p={0}>
                    <SimpleGrid cols={{ sm: 0, lg: 2 }} spacing={0} >
                        <div style={{ height: 350 }}>
                            <Image
                                src="./voctor-preview.jpg"
                                w="100%"
                                fit="cover"
                                h="100%"
                            />
                        </div>
                        <div style={{ height: 350 }}>
                            <Image
                                src="./voctor-preview2.png"
                                w="100%"
                                fit="cover"
                                h="100%"
                            />
                        </div>
                    </SimpleGrid>
                </GridCol>
                <GridCol span={{ base: 12, md: 4 }} bg={"brandBordeux"}>
                    <Flex h="100%" w="100%" c="white" direction="column" justify="center" gap="sm" p={{ base: 0, lg: "xs" }} py="sm" ta={{ base: "center", md: "left" }}>
                        <Text fw={600}>{t('question')}</Text>
                        <Text fs="italic">{t('answer')}</Text>
                    </Flex>
                </GridCol>
            </Grid>
            <Group gap="xs" justify="flex-start" mt="10px">
                <Text
                    component={Link}
                    href="/about"
                    fz={{ base: "md", lg: "lg" }}
                    fw={700}
                    c={"brandBordeux"}
                >
                    {t('cta')}
                </Text>
                <ThemeIcon variant="transparent" c="brandBordeux">
                    <FaArrowRight />
                </ThemeIcon>
            </Group>
        </Stack>
    );
}