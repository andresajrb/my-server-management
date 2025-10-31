import dotenv from 'dotenv';
import { CorsOptions } from 'cors';

dotenv.config();


const MY_EXPERIENCE_APP_URL = process.env.MY_EXPERIENCE_APP_URL

type NodeEnv = 'local' | 'production';

type AppEnv = {
    PORT: number;
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_USER: string;
    EMAIL_RECIPIENT: string;
    EMAIL_FROM: string;
    MY_EXPERIENCE_APP_URL: string;
    VERSION: string;
    NODE_ENV: NodeEnv;
    EMAIL_SMTP_KEY: string;
}

export const env: AppEnv = {
    PORT: Number(process.env.PORT) || 3000,
    EMAIL_HOST: 'smtp-relay.brevo.com',
    EMAIL_PORT: 587,
    EMAIL_USER: '9a28b4001@smtp-brevo.com',
    EMAIL_RECIPIENT: 'andresajrb@gmail.com',
    EMAIL_FROM: 'andresajrb@gmail.com',
    MY_EXPERIENCE_APP_URL: 'https://my-experience-app.vercel.app',
    VERSION: '1',
    NODE_ENV: process.env.NODE_ENV as NodeEnv,
    EMAIL_SMTP_KEY: process.env.EMAIL_SMTP_KEY as string,
}

export const getCorsOptions = (): CorsOptions => {
    const whitelist: string[] = [];
    if (process.env.NODE_ENV === 'local') {
        whitelist.push('http://localhost:3000');
    }
    if (MY_EXPERIENCE_APP_URL) {
        whitelist.push(MY_EXPERIENCE_APP_URL);
    }
    return {
        origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
            if (whitelist.indexOf(origin || '') !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    }
}

export const getVersionURL = (): string => {
    if (process.env.NODE_ENV === 'local') {
        return '/api/local';
    }
    return `/api/v${process.env.VERSION || '1'}`;
}