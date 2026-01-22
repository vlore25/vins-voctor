import { BackgroundImage, Box, Container, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./page.module.css"

const herosImg = [
    {
        path: "/vineyard/vineyardhero1.jpg"
    },
    {
        path: "/vineyard/vineyardhero2.jpg"
    },
    {
        path: "/vineyard/vineyardhero3.jpg"
    }
]


export default function VineyardPage() {
    const t = useTranslations('VineyardPage');

    return (
        <>
            <Stack gap={0}>
                <Title fz={{ base: "2em", lg: "2.5em" }} fw={400}>
                    {t.rich('title')}
                </Title>
                <Stack className={classes.cardBase} top={{ base: 100, lg: 200 }}
                    style={{
                        zIndex: 1
                    }}
                    my="md"
                >
                    <Text ta='justify' fz={{ base: "md", lg: "xl" }}>
                        {t('story.0.content')}
                    </Text>
                    <BackgroundImage
                        src={herosImg[0].path}
                        h={{ base: 200, sm: 250, lg: 350 }}
                        w={{ base: "100vw", sm: "100%" }}
                        ml={{ base: 'calc(-50vw + 50%)', sm: 0 }}
                    >
                        <Flex
                            align="flex-end"
                            h="100%"
                            p="md"
                            bg="linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)">
                            <Text c="white" fz={{ base: "sm", sm: "md", lg: "xl" }}>
                                Châteaubourg, AOC Saint-Joseph
                            </Text>
                        </Flex>
                    </BackgroundImage>
                </Stack>
                <Flex
                    className={`${classes.cardBase} ${classes.cardAnimated}`}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                    gap={{ base: 'md', lg: 'xl' }}
                    top={{ base: 100, lg: 200 }}
                    style={{
                        zIndex: 2
                    }}
                    bg="#f8f8f8"

                >
                    <Text ta='justify' fz={{ base: "md", lg: "xl" }}>
                        {t('story.1.content')}
                    </Text>
                    <Image
                        src={herosImg[1].path}
                        h={{ base: 350, sm: 250, lg: 350 }}
                    >
                    </Image>
                </Flex>
                <Flex
                    className={classes.cardAnimated}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                    gap={{ base: 'md', lg: 'xl' }}
                    top={{ base: 100, lg: 200 }}
                    style={{
                        zIndex: 3
                    }}
                    bg="#f8f8f8"
                >
                    <Image
                        src={herosImg[2].path}
                        h={{ base: 350, sm: 250, lg: 350 }}
                    >
                    </Image>
                    <Text fz={{ base: "md", lg: "xl" }}>
                        {t('story.2.content')}
                    </Text>
                </Flex>

            </Stack>
        </>
    )
}