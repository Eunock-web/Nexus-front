import {z, ZodType} from 'zod';
import type { RegisterInput } from '../types';

export const RegisterSchema: ZodType<RegisterInput> = z.object({
    firstname : z.string().min(2, 'The firstname must be more than 2').max(30, 'The firstname must be less than 30'),
    lastname : z.string().min(2, 'The lastname must be more than 2').max(30, 'The lastname must be less than 30'),
    email : z.string().email("Email required"),
    password : z.string().min(8).max(20),
    confirmPassword : z.string().min(8).max(20)
}).refine((data)=>data.password === data.confirmPassword, {
    message : "Password do not match",
    path : ["confirmPassword"]
})