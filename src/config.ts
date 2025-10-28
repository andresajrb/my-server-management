import { CorsOptions } from "cors";

const MY_EXPERIENCE_APP_URL = process.env.MY_EXPERIENCE_APP_URL

export const getCorsOptions = (): CorsOptions => {
    const whitelist: string[] = [];
    if (process.env.ENVIRONMENT === 'local') {
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
    if (process.env.ENVIRONMENT === 'local') {
        return '/api/local';
    }
    return `/api/v${process.env.VERSION || '1'}`;
}