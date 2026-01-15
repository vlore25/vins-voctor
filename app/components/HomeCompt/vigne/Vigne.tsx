import { Anchor,  Center,  Grid, GridCol, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";

export default function Vigne() {
    return (
            <Grid>
                <GridCol span={{ base: 12, lg: 7 }}>
                    <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                        <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>La région</Title>
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
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
                <GridCol span={{ base: 12, lg: 4 }}>
                    <Group gap="xs">
                        <Anchor href="#" fz={{ base: "md", lg: "lg" }} fw={700}>CONNAÎTRE LA VIGNE</Anchor>
                        <ThemeIcon variant="transparent">
                            <FaArrowRight />
                        </ThemeIcon>
                    </Group>
                </GridCol>
            </Grid>
    );
}