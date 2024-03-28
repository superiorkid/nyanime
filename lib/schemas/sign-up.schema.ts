import z from 'zod'

export const signUpSchema = z.object({
    username: z.string().min(3).max(15).refine((value) => value.includes(" "), "No spaces!"),
    email: z.string().email(),
    password: z.string().min(6).max(50)
})

export type SignUp = z.infer<typeof signUpSchema>