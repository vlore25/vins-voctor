"use client"

import { Button, Group, Stack, Textarea, TextInput, Modal, Text } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@mantine/hooks'; // Pour gérer l'ouverture du modal
import { useState } from 'react';
import { sendEmail } from './sendEmail.action';

export interface ContactInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function EmailForm() {
    // 1. Gestion de l'état du Modal
    const [opened, { open, close }] = useDisclosure(false);
    const [modalConfig, setModalConfig] = useState({ title: '', message: '', color: 'blue' });

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInputs>();

    const onSubmit = async (data: ContactInputs) => {
        const result = await sendEmail(data);
        
        if (result.success) {
            setModalConfig({
                title: "Envoi réussi",
                message: "Votre message a bien été transmis à Vins Victor.",
                color: ""
            });
            reset(); 
        } else {
            setModalConfig({
                title: "Échec de l'envoi",
                message: `Une erreur est survenue : ${result.error}`,
                color: "red"
            });
        }
        open(); 
    };

    return (
        <>
            {/* 2. Composant Modal de Mantine */}
            <Modal 
                opened={opened} 
                onClose={close} 
                title={modalConfig.title} 
                centered
                overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
            >
                <Text size="sm" mb="lg">{modalConfig.message}</Text>
                <Button color={modalConfig.color} onClick={close} fullWidth>
                    D'accord
                </Button>
            </Modal>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <TextInput
                        label="Nom"
                        placeholder="Votre nom"
                        {...register('name', { required: "Le nom est requis" })}
                        error={errors.name?.message}
                    />
                    <TextInput
                        label="Courriel"
                        placeholder="votre@email.fr"
                        {...register('email', { 
                            required: "L'email est requis",
                            pattern: { value: /^\S+@\S+$/, message: "Email invalide" }
                        })}
                        error={errors.email?.message}
                    />
                    <TextInput
                        label="Sujet"
                        placeholder="Sujet"
                        {...register('subject', { required: "Le sujet est requis" })}
                        error={errors.subject?.message}
                    />
                    <Textarea
                        label="Message"
                        placeholder="Votre message"
                        minRows={3}
                        {...register('message', { required: "Le message est vide" })}
                        error={errors.message?.message}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type='submit' loading={isSubmitting}>
                            Envoyer
                        </Button>
                    </Group>
                </Stack>
            </form>
        </>
    );
}