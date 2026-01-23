import { Stack, Text, Title, Grid, Image, GridCol, Flex, Box } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./page.module.css";

export default function Aboutpage() {
  const t = useTranslations('AboutPage');

  const STORY_DATA = [
    { content: t('story.0.content'), image: "/hero3.webp" },
    { content: t('story.1.content'), image: "/hero2.webp" },
    { content: t('story.2.content'), image: "/hero4.webp" }
  ];

  return (
    <>
      <Stack mb={{ base: "xs", lg: "xl" }} gap="xs">
        <Title fz={{ base: "2em", lg: "2.5em" }} fw={400}>
          {t('title')} <Text c="brandBordeux" span inherit>{t('titleSpan')}</Text>
        </Title>
        <Text fz={{ base: "md", lg: "1.2em" }} fw={500} fs="italic">
          {t('mention')}
        </Text>
      </Stack>

      {STORY_DATA.map((item, index) => {
        const isEven = index % 2 === 0;
        const cardClasses = index === 0
          ? classes.cardBase
          : `${classes.cardBase} ${classes.cardAnimated}`;
          
        const textAlign = !isEven ? "left" : "right";

        return (
          <Box
            key={index}
            className={cardClasses}
            top={{ base: 0, lg: 120 }} 
            style={{ zIndex: index + 1 }}
          >
            <Grid h="100%" gutter={{ base: "xl", sm: "xs" }} align="center" m={0}>
              
              <GridCol
                span={{ base: 12, md: 6 }}
                order={{ base: 2, md: isEven ? 1 : 2 }}
                p={{ base: "md", lg: "xl" }}
                ta={{ base: "justify", sm: textAlign }}
              >
                <Flex direction="column" justify="center" gap="md">
                  <Text fz={{ base: "md", lg: "xl" }} lh={1.6}>
                    {item.content}
                  </Text>
                </Flex>
              </GridCol>

              <GridCol 
                span={{ base: 12, md: 6 }} 
                order={{ base: 1, md: isEven ? 2 : 1 }} 
                h={{ base: "60vh", md: "100%" }} 
              >
                <Image
                  src={item.image}
                  alt="Illustration Voctor"
                  h="100%"
                  w="100%"
                  fit="cover"
                  style={{
                    borderLeft: isEven ? "none" : "1px solid #eee",
                    borderRight: isEven ? "1px solid #eee" : "none"
                  }}
                />
              </GridCol>
            </Grid>
          </Box>
        );
      })}
    </>
  );
}