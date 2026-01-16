import { Anchor,  Center,  Grid, GridCol, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

export default function Vigne() {
    return (
            <Grid>
                <GridCol span={{ base: 12, lg: 7 }}>
                    <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                        <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>La région</Title>
                        <Stack gap="md">
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                            L&apos;identité de <Text c="brandBordeux" span inherit>Vins Voctor</Text> se cultive à travers trois terroirs d&apos;exception.
                        </Text>

                        <Stack gap="xs">
                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                    À Châteaubourg, la Syrah trouve sa pleine expression pour donner naissance au Saint-Joseph.
                                </Text>
                            </Group>

                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                    Plus au sud, les terres de Roussas offrent un écrin idéal au Grenache noir.
                                </Text>
                            </Group>

                            <Group align="flex-start" wrap="nowrap">
                                <ThemeIcon variant="transparent" c="dark" mt={3} size="sm">
                                    <FaMapMarkerAlt size={18} />
                                </ThemeIcon>
                                <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>
                                    Allan accueille nos cépages blancs, Grenache blanc et Bourboulenc, pour des vins d&apos;une grande finesse.
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
                            <Text fz={{ base: "sm", lg: "lg" }} fw={500} ta="center">Cornas, Vallée du Rhône nord.</Text>
                        </Stack>
                    </Center>
                </GridCol>
            </Grid>
    );
}