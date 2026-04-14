import z from "zod";

export const ProjectSchema = z.object({
    name: z.string().min(3, "Le nom doit avoir au moins 3 caractères"),
    description: z.string().optional(),
    couleur: z.string().optional(),
    tagname: z.string().min(1, "Le tag est requis"),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
