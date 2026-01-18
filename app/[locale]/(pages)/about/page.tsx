import { Stack, Text, Title, Grid, Image, GridCol } from "@mantine/core";
import { useTranslations } from "next-intl";


export default function Aboutpage() {
  const t = useTranslations('AboutPage');

  const STORY_DATA = [
    {

      content: t('story.0.content'),
      image: "/hero3.webp"
    },
    {
      content: t('story.1.content'),
      image: "/hero2.webp"
    },
    {
      content: t('story.2.content'),
      image: "/hero4.webp"
    }
  ];

  return (
    <>
      <Stack mb="xl" gap="xs">
        <Title fz={{ base: "2em", lg: "2.5em" }} fw={400}>{t('title')} <Text c="brandBordeux" span inherit>{t('titleSpan')}</Text>
        </Title>
        <Text fz={{ base: "0.9em", lg: "1.2em" }} fw={500} fs="italic">{t('mention')}</Text>
      </Stack>

      <Stack gap={80}>
        {STORY_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Grid key={index} align="center" gutter={40}>
              <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: isEven ? 1 : 2 }}>
                <Text fz="lg" lh={1.8}>
                  {item.content}
                </Text>
              </GridCol>

              <GridCol span={{ base: 12, md: 5 }} order={{ base: 1, md: isEven ? 2 : 1 }}>
                <Image
                  src={item.image}
                  alt="Illustration Voctor"
                  radius="md"
                />
              </GridCol>
            </Grid>
          );
        })}
      </Stack>
    </>
  );
}