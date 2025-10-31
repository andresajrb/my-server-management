import nodemailer from 'nodemailer';
import { env } from '../config';

const transporter = nodemailer.createTransport({
  host: env.EMAIL_HOST,
  port: env.EMAIL_PORT,
  secure: false,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_SMTP_KEY,
  },
});

interface MailOptions {
  subject: string;
  html: string;
}

const sendEmail = async (options: MailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to: env.EMAIL_RECIPIENT,
      ...options,
    });
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Could not send email');
  }
};

export default { sendEmail };