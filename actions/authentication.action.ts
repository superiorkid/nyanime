"use server"

import prisma from "@/lib/prisma"
import { SignIn, signInSchema } from "@/lib/schemas/sign-in.schema"
import { SignUp } from "@/lib/schemas/sign-up.schema"
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export async function signUpAction(values: SignUp) {
    try {

        const inputValidation = signInSchema.safeParse(values)

        if (!inputValidation.success) {
            throw new Error(inputValidation.error.errors.at(0)?.message)
        }

        const { email, username, password } = values

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email }, { username }
                ]
            }
        })

        if (user) {
            throw new Error("User already exists")
        }

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        await prisma.user.create({
            data: { email, username, password: hashPassword }
        })

        revalidateTag("user")

        return {
            message: "create new user successfully",
        }
    } catch (error) {
        console.error((error as Error).message)
        throw new Error((error as Error).message)
    }
}

export async function signInAction(values: SignIn) {
    try {
        const inputValidation = signInSchema.safeParse(values)

        if (!inputValidation.success) {
            throw new Error(inputValidation.error.errors.at(0)?.message)
        }

        const { email, password } = values

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!user || !await bcrypt.compare(password, user.password!)) {
            throw new Error("invalid credentials")
        }

        const oneDay = 24 * 60 * 60 * 1000

        const payload = { sub: user.id, username: user.username }
        const token = jwt.sign(payload, process.env.SECRET_KEY as string, { expiresIn: oneDay })

        cookies().set("token", token, { maxAge: oneDay })

        return {
            token,
            message: "sign in successfully",
        }
    } catch (error) {
        console.error((error as Error).message)
        throw new Error((error as Error).message)
    }
}


export async function signOutAction() {
    try {
        const token = cookies().has("token")

        if (!token) return null

        cookies().delete("token")
        return {
            message: "log out succeessfully"
        }
    } catch (error) {
        return null
    }
}

function getToken() {
    const token = cookies().has("token")
    if (!token) return null
    return cookies().get("token")
}

export async function getSession() {
    const token = getToken()
    const payload = jwt.verify(token?.value!, process.env.SECRET_KEY as string)
    return payload as { sub: string, username: string }
}
