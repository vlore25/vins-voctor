import { 
    Title, 
    Stack, 
    Container, 
    Text, 
    Accordion, 
    AccordionItem,
    AccordionControl,
    AccordionPanel
} from "@mantine/core";
import { 
    IconShieldCheck, 
    IconLock, 
    IconEye, 
    IconFileText, 
    IconUserShield 
} from "@tabler/icons-react";

export default function TermsPage() {
    return (
        <>
            <Stack mb="xl">
                <Title fz={{ base: "1.8em", lg: "2.4em" }} fw={700}>
                    Politique de confidentialité
                </Title>
                <Text c="dimmed" size="sm">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </Text>
                <Text>
                    Nous accordons une importance capitale à la protection de vos données personnelles. 
                    Cette politique détaille comment nous collectons, utilisons et protégeons vos informations.
                </Text>
            </Stack>

            <Accordion variant="separated" radius="md" defaultValue="collecte">
                {/* Article 1 */}
                <AccordionItem value="collecte">
                    <AccordionControl icon={<IconEye size={20} />}>
                        Article 1 : Collecte des données
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" mb="xs">
                            Nous collectons les informations que vous nous fournissez directement lors de :
                        </Text>
                        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>La création de votre compte (Nom, email, mot de passe).</li>
                            {/* Escaped apostrophe here */}
                            <li>L&apos;utilisation de nos services de contact.</li>
                            <li>La navigation sur le site via des cookies techniques.</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                {/* Article 2 */}
                <AccordionItem value="utilisation">
                    <AccordionControl icon={<IconFileText size={20} />}>
                        Article 2 : Utilisation des données
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" style={{ lineHeight: '1.6' }}>
                            Vos données sont utilisées exclusivement pour :
                            <br /><br />
                            1. Fournir et maintenir nos services.<br />
                            2. Vous informer des changements de service.<br />
                            3. Assurer un support client de qualité.<br />
                            {/* Escaped apostrophe here */}
                            4. Analyser l&apos;utilisation du site pour améliorer l&apos;expérience utilisateur.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                {/* Article 3 */}
                <AccordionItem value="protection">
                    <AccordionControl icon={<IconLock size={20} />}>
                        Article 3 : Sécurité et Stockage
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" style={{ lineHeight: '1.6' }}>
                            La sécurité de vos données est notre priorité. Nous utilisons des protocoles de chiffrement 
                            standard pour protéger les transmissions de données. Vos informations sont 
                            stockées sur des serveurs sécurisés conformément aux normes en vigueur.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                {/* Article 4 */}
                <AccordionItem value="droits">
                    <AccordionControl icon={<IconUserShield size={20} />}>
                        Article 4 : Vos droits
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm">
                            Vous disposez des droits suivants concernant vos données personnelles :
                        </Text>
                        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            {/* Escaped apostrophes here */}
                            <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données.</li>
                            <li><strong>Droit de rectification :</strong> Corriger des informations inexactes.</li>
                            <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données.</li>
                            <li><strong>Droit d&apos;opposition :</strong> Refuser l&apos;usage de vos données.</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                {/* Article 5 */}
                <AccordionItem value="contact">
                    <AccordionControl icon={<IconShieldCheck size={20} />}>
                        Article 5 : Contact
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm">
                            Pour toute question concernant cette politique, vous pouvez nous contacter à l&apos;adresse dédiée aux données personnelles indiquée dans nos mentions légales.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}