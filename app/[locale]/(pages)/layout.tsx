// app/(pages)/layout.tsx
import { Container } from "@mantine/core";
import { Metadata } from "next";
import DynamicBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
    title: {
        default: 'Vins Voctor | Vigneron de la vallée du Rhône',
        template: '%s | Vins Voctor'
    },
    description: 'Vins artisanaux produits par Josimar Verduzco.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container mb={{ base: "md", sm: "xl", lg: "xl" }} pt={{ base: "100", sm: "xl", lg: "120px" }}>
            <DynamicBreadcrumbs />
            <main>{children}</main>
        </Container>
    );
}