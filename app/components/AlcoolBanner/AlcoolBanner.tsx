"use client"

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Center, Stack } from '@mantine/core';
import Logo from '../Logo/Logo';
import { useTranslations } from 'next-intl';

export default function AlcoolBanner() {
    const [opened, { close }] = useDisclosure(true);
    const t = useTranslations('AlcoolBanner');

    return (
        <Modal 
            opened={opened} 
            onClose={close} 
            withCloseButton={false} 
            zIndex={9999} 
            centered
            closeOnClickOutside={false}
            closeOnEscape={false}
        >
            <Stack gap="md">
                <Center>
                    <Logo 
                        titleProps={{ order: 3 }}
                        logoProps={{ w: '70px' }} 
                    />
                </Center>
                
                <Text ta="center">
                    {t('warning1')}
                </Text>
                
                <Text fs="italic" ta="center" fz={{base:"xs", sm:"md"}}>
                    {t('warning2')}
                </Text>
                
                <Center>
                    <Button onClick={close} data-autofocus>
                        {t('btn')}
                    </Button>
                </Center>
            </Stack>
        </Modal>
    );
}