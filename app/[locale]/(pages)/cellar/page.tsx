import { Card, Container, Grid, GridCol, Image, Stack, Title, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./page.module.css"; 

export default function CellarPage() {
    const t = useTranslations('CellarPage');

    const CONTENT = [
        {
            content: t('content.0.p'),
            image: "/cellar/cellar1.jpg"
        },
        {
            content: t('content.1.p'),
            image: "/cellar/cellar2.jpg"
        },
    ];

    return (
        <>
            <Stack mb={{ base: "xs", lg: "xl" }} gap="xs">
                <Title fz={{ base: "2em", lg: "2.5em" }} fw={400}>
                    {t('title')}
                </Title>
            </Stack>

            {CONTENT.map((item, index) => {
                
                const isEven = index % 2 === 0;
                const cardClasses = index === 0
                    ? classes.cardBase
                    : `${classes.cardBase} ${classes.cardAnimated}`;

                return (
                    <Card
                        key={index} 
                        className={cardClasses}
                        padding={0} 
                        radius={0}
                        style={{ zIndex: index + 1 }} 
                    >
                        <Container size="xl" h="100%" p={0}>
                            <Grid h="100%" align="center" gutter="xl">
                                
                                <GridCol
                                    span={{ base: 12, lg: 6 }}
                                    order={{ base: 1, lg: isEven ? 1 : 2 }} 
                                    p={0}
                                >
                                    <Container p={{ base: "md", lg: "xl" }}>
                                        <Text 
                                            fz={{ base: "md", lg: "xl" }} 
                                            lh={1.6} 
                                            ta="justify"
                                        >
                                            {item.content}
                                        </Text>
                                    </Container>
                                </GridCol>

                                <GridCol
                                    span={{ base: 12, lg: 6 }}
                                    order={{ base: 2, lg: isEven ? 2 : 1 }}
                                    h="100%"
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <Image
                                        src={item.image}
                                        h={{ base: 350, sm: 400, lg: "100vh" }}
                                        w="100%" 
                                        fit="cover"
                                    />
                                </GridCol>

                            </Grid>
                        </Container>
                    </Card>
                )
            })}
        </>
    )
}