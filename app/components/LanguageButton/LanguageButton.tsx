"use client"
import { cifFr, cifGb } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Button, Menu } from "@mantine/core"; 
import { useLocale } from "next-intl"; // 1. Importer le hook
import { usePathname, useRouter } from "../../../i18n/routing";

export default function LanguageButton() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale(); 

    const changeLanguage = (newLocale: "fr" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };
    
    return (
        <Menu shadow="md" width={150} zIndex={9999}>
            <Menu.Target>
                <Button 
                    variant="subtle" 
                    leftSection={<CIcon icon={locale === 'en' ? cifGb : cifFr} width={20} />}
                >
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>{locale === 'en'? "language" : "langue"}</Menu.Label>
                <Menu.Item
                    leftSection={<CIcon icon={cifFr} width={18} />}
                    onClick={() => changeLanguage('fr')}
                >
                    Français
                </Menu.Item>
                <Menu.Item 
                    leftSection={<CIcon icon={cifGb} width={18} />}
                    onClick={() => changeLanguage('en')}
                >
                    English
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}