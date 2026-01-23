"use client";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { useSelectedLayoutSegments } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";
import links from "../../const/links"; 
import winesData from "../../const/wines";
// 3. IMPORT DU HOOK DE TRADUCTION
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";

export default function DynamicBreadcrumbs() {
    const tNav = useTranslations('Navigation'); // Pour Accueil, Vins...
    const tWines = useTranslations('Wines');    // Pour le nom des vins
    
    const segments = useSelectedLayoutSegments();

    const breadItems = [
        // Traduction de "Accueil"
        <Anchor component={Link} href="/" key="home">{tNav('home')}</Anchor>
    ];

    let currentPath = "";

    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;

        const linkInfo = links.find(l => l.link === currentPath);
        
        let label = segment;

        if (linkInfo) {
            label = tNav(linkInfo.label);
        } 
        else if (winesData.some(w => w.id === segment)) {
            label = tWines(`${segment}.name`);
        }

        const isLast = index === segments.length - 1;

        breadItems.push(
            isLast ? (
                <Text key={currentPath} size="md" fw={500}>{label}</Text>
            ) : (
                <Anchor component={Link} href={currentPath} key={currentPath}>
                    {label}
                </Anchor>
            )
        );
    });

    return (
        <Breadcrumbs separator={<HiChevronRight size={14} />} mb="xl">
            {breadItems}
        </Breadcrumbs>
    );
}