import {z} from 'zod';

export const OtpSchema = z.object({
    code : z.string()
});