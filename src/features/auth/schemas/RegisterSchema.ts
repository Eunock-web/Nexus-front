import {z} from 'zod';

export const RegisterSchema = z.object({
    firstname : z.string().min(2, 'Too short').max(30, 'The firstname must be less than 30'),
    lastname : z.string().min(2, 'TToo short').max(30, 'The lastname must be less than 30'),
    email : z.string().email("Email required"),
    password : z.string().min(8, 'Invalide password'),
    confirmPassword : z.string().min(8).max(20)
}).refine((data)=>data.password === data.confirmPassword, {
    message : "Password do not match",
    path : ["confirmPassword"]
})

//Generation automatique du type à partir du schema
export type RegisterInput = z.infer<typeof RegisterSchema>;