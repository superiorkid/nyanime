import z from 'zod'

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50)
})

export type SignIn = z.infer<typeof signInSchema>