import { Container, Image, Stack, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";


export default function VineyardPage() {
    const t = useTranslations('VineyardPage');

    return (
        <>
            <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                <Title fz={{ base: "2em", lg: "2.5em" }} fw={400}>
                    {t.rich('title')}
                </Title>
            </Stack>
            <Image
                src="/vineyard/vineyardhero1.jpg"
                alt=""
                h={300} 
                fit="cover"
                w="100vw" 
                ml="calc(50% - 50vw)"
                // --------------------------------------
            />
        </>
    )
}