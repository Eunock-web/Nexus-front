import {email, z} from 'zod';

const OtpSchema = z.object({
    code : z.string()
});