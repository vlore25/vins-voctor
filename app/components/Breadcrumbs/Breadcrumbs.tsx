"use client";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { useSelectedLayoutSegments } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";
import links from "../../const/headerLinks"; // Vérifiez le chemin
import winesData from "../../const/wines"; // Vérifiez le chemin

export default function DynamicBreadcrumbs() {
    const segments = useSelectedLayoutSegments();
    const breadItems = [
        <Anchor component={Link} href="/" key="home">Accueil</Anchor>
    ];

    let currentPath = "";
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const linkInfo = links.find(l => l.link === currentPath);
        let label = linkInfo ? linkInfo.label : segment;

        if (currentPath.startsWith('/vins/') && segment !== 'vins') {
            const wine = winesData.find(w => w.id === segment);
            if (wine) label = wine.name;
        }

        const isLast = index === segments.length - 1;
        breadItems.push(
            isLast ? (
                <Text key={currentPath} size="sm" fw={500}>{label}</Text>
            ) : (
                <Anchor component={Link} href={currentPath} key={currentPath}>{label}</Anchor>
            )
        );
    });

    return (
        <Breadcrumbs separator={<HiChevronRight size={14} />} mb="xl">
            {breadItems}
        </Breadcrumbs>
    );
}