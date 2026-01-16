"use client"
import { cifFr, cifUs } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Button, Menu, Select } from "@mantine/core";


const EnglishButton = () => (
    <Menu.Item leftSection={<CIcon icon={cifUs} width={18} />}>
        English
    </Menu.Item>
);


export default function LanguageButton() {
    return (
        <Menu shadow="md" width={150}>
            <Menu.Target>
                <Button variant="subtle" leftSection={<CIcon icon={cifFr} width={20} />}>
                    Français
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Langue</Menu.Label>
                <Menu.Item
                    leftSection={<CIcon icon={cifFr} width={18} />}
                >
                    Français
                </Menu.Item>
                <EnglishButton />
            </Menu.Dropdown>
        </Menu>
    )

}