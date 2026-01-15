"use client"
import { Anchor, Breadcrumbs, Container } from "@mantine/core";
import { useSelectedLayoutSegments } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    const params = useSelectedLayoutSegments()
     console.log(params)

    const breadItems = params.map((item, index) => (
        <Anchor href={item} key={index}>
            {item}
        </Anchor>
    ));

    return (
        <Container my="xl">
            <Breadcrumbs separator={<HiChevronRight />} separatorMargin="md" mb="md">
                {breadItems}
            </Breadcrumbs>
            <main>{children}</main>
        </Container>
    )
}