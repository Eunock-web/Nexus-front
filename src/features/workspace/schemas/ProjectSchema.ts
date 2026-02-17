import z from "zod";


export const ProjectSchema = z.object({
    name : z.string().min(3, "Le nom doit fait au moins trois lettres"),
    color : z.string(),
    tagname : z.string()
})