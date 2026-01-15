"use server"
import nodemailer from 'nodemailer';
import { ContactInputs } from './EmailForm';

export async function sendEmail(data: ContactInputs) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APPPASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `${data.subject}`,
            html: `<p>Message via le site web <strong>Vins Voctor</strong> par ${data.email}:</p>
           <p>${data.message.replace(/\n/g, '<br />')}</p>`,
            replyTo: data.email,
        });
        console.log(process.env.EMAIL)
        return { success: true };
    } catch (error) {
        console.log(process.env.APPPASS)
        return { success: false, error: "Erreur d'envoi" };

    }
}