import { Title, Flex, Stack, Text, Badge, Group, Accordion, Skeleton, Table, AccordionItem, AccordionControl, AccordionPanel, TableTbody, TableTd, TableTr } from "@mantine/core";
import Image from "next/image";
import { Suspense } from "react";
// 1. On retire useTranslations car on ne peut pas l'utiliser dans un composant async
// import { useTranslations } from "next-intl"; 
import winesData from "../../../../const/wines";
import { getTranslations } from "next-intl/server"; // On garde cet import

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Wines' });
  const wine = winesData.find((w) => w.id === id);

  if (!wine) return { title: 'Vin introuvable' };

  return {
    title: `${t(`${wine.id}.name`)} | Vins Voctor`,
    description: t(`${wine.id}.description`),
  };
}

export default async function WinePage({ params }: Props) {
    const { id, locale } = await params;

    // 2. On remplace les hooks par les appels async server-side
    // Au lieu de useTranslations, on await getTranslations
    const tWines = await getTranslations({ locale, namespace: 'Wines' });
    const tPage = await getTranslations({ locale, namespace: 'WinesPage' });

    const wine = winesData.find((w) => w.id === id);

    if (!wine) {
        return <Text>{tPage('notFound')}</Text>;
    }

    // Le reste fonctionne de la même manière car tWines et tPage renvoient les mêmes fonctions
    const tags = tWines.raw(`${wine.id}.tags`) as string[];
    const accords = tWines.raw(`${wine.id}.accords`) as string[];

    return (
        <>
            <Flex
                direction={{ base: "column", sm: "row" }}
                align="center"
                gap={{ base: 'xs', sm: 'md' }}
            >
                <Suspense fallback={<Skeleton height={400} width={180} />}>
                    <Image
                        src={wine.img}
                        alt={tWines(`${wine.id}.name`)} 
                        style={{ objectFit: 'contain' }}
                        width={180}
                        height={400}
                        priority
                    />
                </Suspense>

                <Stack gap="xs">
                    <Title fz={{ base: "h3", lg: "h2" }} c="brandBordeux">{tWines(`${wine.id}.name`)}</Title>
                    <Text fz="h5">{tWines(`${wine.id}.mention`)}</Text>

                    <Flex align="center" gap="5px">
                        <Badge color={wine.badgeColor} radius="sm" autoContrast size='lg' >
                            {tWines(`${wine.id}.type`)}
                        </Badge>
                        {wine.bio &&
                            <Image
                                width={60}
                                height={26}
                                src="/logo/EU_Organic_Logo_Colour_54x36mm.svg" alt="Eurofeuille"></Image>}
                    </Flex>

                    <Text mt={{ base: "0", lg: "lg" }}>
                        {tWines(`${wine.id}.description`)}
                    </Text>
                </Stack>
            </Flex>
            
            {/* ... Le reste du code reste identique ... */}
             <Stack my={{ base: "md", lg: "md" }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('profile')}</Title>
                <Group my={{ base: "0", lg: "0" }} wrap="nowrap">
                    {tags.map((tag) => (
                        <Badge radius={0} size="lg" key={tag} mr="0" variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </Group>
            </Stack>

            <Accordion defaultValue="Informations du vin">
                <AccordionItem value="Informations du vin" px="inherit">
                    <AccordionControl px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('infos')}</Title>
                    </AccordionControl>
                    <AccordionPanel px="inherit" >
                        <Table verticalSpacing="xs" withColumnBorders={false} withRowBorders={false} >
                            <TableTbody >
                                <TableTr>
                                    <TableTd><Text fw={600}>{tPage('location')}</Text></TableTd>
                                    <TableTd><Text>{tWines(`${wine.id}.location`)}</Text></TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd><Text fw={600}>{tPage('variety')}</Text></TableTd>
                                    <TableTd><Text>{tWines(`${wine.id}.variety`)}</Text></TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd><Text fw={600}>Bio:</Text></TableTd>
                                    <TableTd><Text>{tPage('bio')}</Text></TableTd>
                                </TableTr>
                            </TableTbody>
                        </Table>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="Accords-met-vin">
                    <AccordionControl px="inherit">
                        <Title fz={{ base: "1.4em", lg: "1.8em" }}>{tPage('pairings')}</Title>
                    </AccordionControl>
                    <AccordionPanel>
                        {accords.map((accord) => (
                            <Text key={accord} mb="sm">-{accord}</Text>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}