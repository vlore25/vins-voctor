"use client"

import { Button, Group, Stack, Textarea, TextInput, Modal, Text, Checkbox } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { sendEmail } from './sendEmail.action';
import { useTranslations } from 'next-intl';

export interface ContactInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
    terms: string;
}

export default function EmailForm() {
    const t = useTranslations('ContactForm');
    const [opened, { open, close }] = useDisclosure(false);
    const [modalConfig, setModalConfig] = useState({ title: '', message: '', color: 'blue' });

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInputs>();

    const onSubmit = async (data: ContactInputs) => {
        const result = await sendEmail(data);

        if (result.success) {
            setModalConfig({
                title: t('modal.successTitle'),
                message: t('modal.successMsg'),
                color: ""
            });
            reset();
        } else {
            setModalConfig({
                title: t('modal.errorTitle'),
                message: `${t('modal.errorMsg')} ${result.error}`,
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
                    {t('modal.btn')}
                </Button>
            </Modal>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <TextInput
                        label={t('labels.name')}
                        placeholder={t('placeholders.name')}
                        {...register('name', { required: t('errors.required') })}
                        error={errors.name?.message}
                    />
                    <TextInput
                        label={t('labels.email')}
                        placeholder={t('placeholders.email')}
                        {...register('email', {
                            required: t('errors.required'),
                            pattern: { value: /^\S+@\S+$/, message: t('errors.emailInvalid') }
                        })}
                        error={errors.email?.message}
                    />
                    <TextInput
                        label={t('labels.subject')}
                        placeholder={t('placeholders.subject')}
                        {...register('subject', { required: t('errors.required') })}
                        error={errors.subject?.message}
                    />
                    <Textarea
                        label={t('labels.message')}
                        placeholder={t('placeholders.message')}
                        autosize
                        minRows={2}
                        maxRows={6}
                        {...register('message', { required: t('errors.messageEmpty') })}
                        error={errors.message?.message}
                    />
                    <Checkbox
                        label={t('terms')}
                        required
                        {...register('terms', { required: t('errors.terms') })}
                    />

                    <Text size="xs" mt="sm" c="dimmed">
                        {t('legal')}
                    </Text>
                    <Group justify="flex-end" mt="md">
                        <Button type='submit' loading={isSubmitting}>
                            {t('submit')}
                        </Button>
                    </Group>
                </Stack>
            </form>
        </>
    );
}