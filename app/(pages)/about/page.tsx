import { Container, Stack, Text, Title, Grid, Image, GridCol } from "@mantine/core";

const STORY_DATA = [
  {
    content: "A 38 ans, Josimar Yacuta Verduzco a déjà vécu mille vies. Né au Mexique, il a grandi en Californie, enseigné l’espagnol à l’uni avant d’embrasser une carrière militaire dans la Légion étrangère. Cinq années passées dans l’infanterie, durant lesquelles il s’éprend de la campagne française.",
    image: "/hero3.webp"
  },
  {
    content: "En 2019, il lâche le béret vert pour les jus rouges et blancs. Il se dégotte un maître d’apprentissage de compète sur une appellation prestigieuse de la vallée du Rhône – Matthieu Barret à Cornas – et embraye sur un BTS viti-œno mention bio dans le Jura.",
    image: "/hero2.webp"
  },
  {
    content: "En parallèle, ses économies et des vendanges sur quelques parcelles d’un copain viticulteur lui permettent d’amorcer une activité de négoce. Depuis trois ans, celui qu’on appelle aussi Voctor tient garnison bachique dans un petit garage converti en cave.",
    image: "/hero4.webp"
  }
];

export default function Aboutpage() {
  return (
    <>
      <Title fz={{ base: "2em", lg: "2.5em" }} fw={400} mb="xl" >
        Connaître <Text c="brandBordeux" span inherit> Voctor</Text>
      </Title>

      <Stack gap={80}> {/* Grand espace entre les sections */}
        {STORY_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Grid key={index} align="center" gutter={40}>
              <GridCol span={{ base: 12, md: 7 }} order={{ base: 2, md: isEven ? 1 : 2 }}>
                <Text fz="lg" lh={1.8}>
                  {item.content}
                </Text>
              </GridCol>

              {/* Colonne Image */}
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