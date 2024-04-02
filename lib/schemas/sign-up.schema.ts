import z from 'zod'

export const signUpSchema = z.object({
    username: z.string().regex(new RegExp("^[A-Za-z_][A-Za-z0-9._]*$"), "Username must start with a letter or underscore and contain only letters, numbers, periods, or underscores, with no spaces or special characters.").min(3).max(15),
    email: z.string().email(),
    password: z.string().min(6).max(50)
})

export type SignUp = z.infer<typeof signUpSchema>