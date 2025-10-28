import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_SMTP_KEY,
  },
});

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async (options: MailOptions) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      ...options,
    });
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Could not send email');
  }
};

export default { sendEmail };