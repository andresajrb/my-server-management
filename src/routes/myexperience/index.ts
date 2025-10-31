import { Router, Request, Response } from 'express';
import emailService from '../../services/emailService';
import { generateContactEmailHTML } from '../../utils/emailTemplates';
import { env } from '../../config';

let router = Router();

router.get('/personalinfo', (req: Request, res: Response) => {
  res.send('Hello World Personal Info ' + env.NODE_ENV);
});

router.post('/send-email', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const htmlBody = generateContactEmailHTML({ name, email, subject, message });

    await emailService.sendEmail({
      subject: `New contact message: ${subject}`,
      html: htmlBody,
    });

    res.status(200).json({ message: 'Email sent successfully', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', success: false });
  }
});

export default router;