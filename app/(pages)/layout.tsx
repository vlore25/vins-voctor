"use client"
import { Anchor, Breadcrumbs, Container, Text } from "@mantine/core";
import { useSelectedLayoutSegments } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";
import links from "../const/links";
import winesData from "../const/wines";
import { Metadata } from "next";

/*async function updatePost() {
    'use server'
     const metadata: Metadata = {
        title: 'Page',
        description: 'Home Page of Sakura Hagen',
    }

}
*/

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const segments = useSelectedLayoutSegments();

    const breadItems = [
        <Anchor component={Link} href="/" key="home">
            Accueil
        </Anchor>
    ];

    let currentPath = "";

    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;


        const linkInfo = links.find(l => l.link === currentPath);
        let label = linkInfo ? linkInfo.label : segment;

        if (currentPath.startsWith('/vins/') && segment !== 'vins') {
            const wine = winesData.find(w => w.id === segment);
            if (wine) {
                label = wine.name;
            }
        }

        const isLast = index === segments.length - 1;

        breadItems.push(
            isLast ? (
                <Text key={currentPath} size="sm" fw={500}>
                    {label}
                </Text>
            ) : (
                <Anchor component={Link} href={currentPath} key={currentPath}>
                    {label}
                </Anchor>
            )
        );
    });

    return (
        <Container my="xl">
            <Breadcrumbs separator={<HiChevronRight size={14} />} mb="xl">
                {breadItems}
            </Breadcrumbs>
            <main>{children}</main>
        </Container>
    );
}