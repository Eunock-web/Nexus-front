import z from "zod";


export const LoginSchema = z.object({
    email : z.string().email('Email required'),
    password : z.string().min(8, 'Too short')
});

export type LoginType = z.infer<typeof LoginSchema>;