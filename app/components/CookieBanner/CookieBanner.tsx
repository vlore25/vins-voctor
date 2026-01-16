"use client";
import { useState, useEffect } from 'react';
import { Paper, Text, Button, Group, Transition, Container, Stack } from '@mantine/core';

export function CookieBanner() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // On vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setOpened(true);
    }
  }, []);

  const handleConsent = (status: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', status);
    setOpened(false);
    // Ici, vous pouvez activer/désactiver Google Analytics
  };

  return (
    <Transition mounted={opened} transition="slide-up" duration={400} timingFunction="ease">
      {(styles) => (
        <Paper 
          shadow="md" 
          withBorder 
          p="md" 
          style={{ 
            ...styles, 
            position: 'fixed', 
            bottom: 20, 
            left: '5%', 
            right: '5%', 
            zIndex: 1000,
            backgroundColor: '#fff'
          }}
        >
          <Container size="lg">
            <Group justify="space-between">
              <Stack gap={0} style={{ flex: 1 }}>
                <Text fw={700} size="lg">Respect de votre vie privée</Text>
                <Text size="sm" c="dimmed">
                  Vins Voctor utilise des cookies pour améliorer votre expérience. 
                  En continuant, vous acceptez notre politique de confidentialité.
                </Text>
              </Stack>
              
              <Group>
                <Button variant="subtle" color="gray" onClick={() => handleConsent('declined')}>
                  Refuser
                </Button>
                <Button bg="brandBordeux" onClick={() => handleConsent('accepted')}>
                  Accepter
                </Button>
              </Group>
            </Group>
          </Container>
        </Paper>
      )}
    </Transition>
  );
}