import { Anchor,  Center, Grid, GridCol, Group, Image, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import classes from './About.module.css';
import { FaArrowRight } from "react-icons/fa";

export default function About() {
    return (
        <>
            <Grid>
                <GridCol span={{ base: 12, lg: 7 }}>
                    <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                        <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>L&apos;Homme derrière <Text c="brandBordeux" span inherit>Vins Voctor</Text></Title>
                        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500}>Josimar Yacuta, vigneron de vins artisanaux de la vallée du Rhône.</Text>
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 12, lg: 5 }}>
                    <Center>
                        <Stack>
                            <div className={classes.border}>
                                <Image src="./voctor-preview.jpg" w={{ base: "100%", lg: "100%" }} />
                            </div>
                            <Text fz={{ base: "sm", lg: "lg" }} fw={500} ta="center">Voctor, négociant vinificateur en vins artisanaux de la Vallée du Rhône nord.</Text>
                        </Stack>
                    </Center>
                </GridCol>
                <GridCol span={{ base: 12, lg: 4 }}>
                    <Group gap="xs">
                        <Anchor href="#" fz={{ base: "md", lg: "lg" }} fw={700}>CONNAÎTRE VOCTOR</Anchor>
                        <ThemeIcon variant="transparent">
                            <FaArrowRight />
                        </ThemeIcon>
                    </Group>
                </GridCol>
            </Grid>
        </>
    );
}