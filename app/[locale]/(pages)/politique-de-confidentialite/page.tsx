import { 
    Title, 
    Stack, 
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
import { useTranslations } from "next-intl";

export default function TermsPage() {
    const t = useTranslations('PrivacyPolicy');

    return (
        <>
            <Stack mb="xl">
                <Title fz={{ base: "1.8em", lg: "2.4em" }} fw={700}>
                    {t('title')}
                </Title>
                <Text c="dimmed" size="sm">
                    {t('lastUpdate', { date: new Date().toLocaleDateString() })}
                </Text>
                <Text>
                    {t('intro')}
                </Text>
            </Stack>

            <Accordion variant="separated" radius="md" defaultValue="collecte">
                <AccordionItem value="collecte">
                    <AccordionControl icon={<IconEye size={20} />}>
                        {t('articles.1.title')}
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" mb="xs">
                            {t('articles.1.intro')}
                        </Text>
                        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>{t('articles.1.list.contact')}</li>
                            <li>{t('articles.1.list.cookies')}</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="utilisation">
                    <AccordionControl icon={<IconFileText size={20} />}>
                        {t('articles.2.title')}
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" mb="xs">
                           {t('articles.2.intro')}
                        </Text>
                        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>{t('articles.2.list.respond')}</li>
                            <li>{t('articles.2.list.improve')}</li>
                            <li>{t('articles.2.list.security')}</li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="protection">
                    <AccordionControl icon={<IconLock size={20} />}>
                        {t('articles.3.title')}
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" style={{ lineHeight: '1.6' }}>
                            {t('articles.3.content')}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="droits">
                    <AccordionControl icon={<IconUserShield size={20} />}>
                        {t('articles.4.title')}
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm" mb="xs">
                            {t('articles.4.intro')}
                        </Text>
                        <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                            <li>
                                {t.rich('articles.4.list.access', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </li>
                            <li>
                                {t.rich('articles.4.list.rectification', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </li>
                            <li>
                                {t.rich('articles.4.list.erasure', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </li>
                            <li>
                                {t.rich('articles.4.list.opposition', {
                                    strong: (chunks) => <strong>{chunks}</strong>
                                })}
                            </li>
                        </ul>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="contact">
                    <AccordionControl icon={<IconShieldCheck size={20} />}>
                        {t('articles.5.title')}
                    </AccordionControl>
                    <AccordionPanel>
                        <Text size="sm">
                            {t('articles.5.content')}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}