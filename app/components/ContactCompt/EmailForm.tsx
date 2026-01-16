"use client"

import { Button, Group, Stack, Textarea, TextInput, Modal, Text, Checkbox } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@mantine/hooks'; // Pour gérer l'ouverture du modal
import { useState } from 'react';
import { sendEmail } from './sendEmail.action';

export interface ContactInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
    terms: string;
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
            <Modal
                opened={opened}
                onClose={close}
                title={modalConfig.title}
                centered
                overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
                zIndex={9999}
            >
                <Text size="sm" mb="lg">{modalConfig.message}</Text>
                <Button color={modalConfig.color} onClick={close} fullWidth>
                    D&apos;accord
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
                        label="Objet"
                        placeholder="Objet"
                        {...register('subject', { required: "Le Objet est requis" })}
                        error={errors.subject?.message}
                    />
                    <Textarea
                        label="Message"
                        placeholder="Votre message"
                        autosize
                        minRows={2}
                        maxRows={6}
                        {...register('message', { required: "Le message est vide" })}
                        error={errors.message?.message}
                    />
                    <Checkbox
                        label="J'accepte la politique de confidentialité et l'utilisation de mes données pour le suivi de ma demande."
                        required
                        {...register('terms', { required: "Veuillez accepter pour pouvoir continuer." })}
                    />

                    <Text size="xs" mt="sm" c="dimmed">
                        Conformément au RGPD, vous disposez d&lsquo;un droit d&lsquo;accès et de suppression de vos données en nous contactant.
                    </Text>
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