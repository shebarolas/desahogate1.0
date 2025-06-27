import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().email({message: "El email no es valido"}),
    password: z.string().min(6, {message: "La contraseña debe tener al menos 6 caracteres"})
});

export type LoginSchemaType = z.infer<typeof loginSchema>;