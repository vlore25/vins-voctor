import { Container, Stack, Text, Title, } from "@mantine/core";


export default function Contactpage() {
    return (
        <Container my="xl">
            <Stack style={{ position: 'relative', overflow: 'hidden' }}>
                <Title fz={{ base: "1.4em", lg: "1.8em" }} fw={400}>Connaître <Text c="brandBordeux" span inherit>Vins Voctor</Text></Title>
                <Text>
                    A 38 ans, Josimar Yacuta Verduzco a déjà vécu mille vies. Né au Mexique, il a grandi en Californie,
                    enseigné l’espagnol à l’uni avant d’embrasser une carrière militaire dans la Légion étrangère. Cinq
                    années passées dans l’infanterie, durant lesquelles il s’éprend de la campagne française. 
                </Text>
                <Text>
                    En 2019, il
                    lâche le béret vert pour les jus rouges et blancs. Il se dégotte un maître d’apprentissage de compète
                    sur une appellation prestigieuse de la vallée du Rhône- Matthieu Barret à Cornas, s’cusez du peu – et
                    embraye sur un BTS viti-œno mention bio dans le Jura. 
                </Text>
                <Text>
                    En parallèle, ses économies et des vendanges
                    sur quelques parcelles d’un copain viticulteur lui permettent d’amorcer une activité de négoce.
                    Depuis trois ans, celui qu’on appelle aussi Voctor tient garnison bachique dans un petit garage
                    converti en cave, où il entraîne une menue troupe de pinards artisanaux, droits dans leur bottes et
                    troussés d’une jolie énergie.
                </Text>
            </Stack>
        </Container>
    )
}