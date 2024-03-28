import { z } from "zod";

export const editUserSchema = z.object({
    username: z.string().min(3).max(15).optional(),
    email: z.string().email().optional(),
})

export type EditUser = z.infer<typeof editUserSchema>