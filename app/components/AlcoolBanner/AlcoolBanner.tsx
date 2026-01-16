"use client"

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Center, Stack } from '@mantine/core';
import Logo from '../Logo/Logo';

export default function AlcoolBanner() {
    const [opened, { open, close }] = useDisclosure(true);

    return (

        <Modal opened={opened} onClose={close} withCloseButton={false} zIndex={9999} centered>
            <Stack gap="md">
                <Center>
                <Logo 
                titleProps={{
                    order: 3
                }}
                    logoProps={{
                        w: '70px'
                    }} />
                    </Center>
                <Text ta="center">Interdiction de vente de boissons alcooliques aux mineurs de moins de 18 ans.</Text>
                <Text fs="italic" ta="center">L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération</Text>
                <Center>
                    <Button onClick={close}>Entendu</Button>
                </Center>
            </Stack>
        </Modal>
    );
}