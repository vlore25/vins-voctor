"use server"
import nodemailer from 'nodemailer';
import { ContactInputs } from './EmailForm';

const dateConsentement = new Date().toLocaleString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

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
            subject: `[Contact Site] ${data.subject}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <p>Message via le site web <strong>Vins Voctor</strong> par <strong>${data.email}</strong> :</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
                ${data.message.replace(/\n/g, '<br />')}
            </div>

            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />

            <p style="font-size: 12px; color: #666; font-style: italic;">
                 <strong>Preuve de consentement RGPD :</strong><br />
                Ce client a coché la case d'acceptation des termes et de la politique de confidentialité 
                le <strong>${dateConsentement}</strong>.
            </p>
            
            <p style="font-size: 11px; color: #999;">
                Adresse email du client : ${data.email}<br />
                ID de session/formulaire : ${data.terms ? 'Accepté' : 'N/A'}
            </p>
        </div>
    `,
            replyTo: data.email,
        });
        console.log(process.env.EMAIL)
        return { success: true };
    } catch (error) {
        console.log(process.env.APPPASS)
        return { success: false, error: "Erreur d'envoi" };

    }
}