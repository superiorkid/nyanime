"use server"

import prisma from "@/lib/prisma"
import { getSession } from "./authentication.action"
import { EditUser } from "@/lib/schemas/edit-user.schema"
import { revalidateTag } from "next/cache"
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"

export async function getCurrentUser() {
    try {
        const session = await getSession()

        const user = await prisma.user.findFirst({
            where: {
                username: session?.username
            }
        })

        if (!user) return null

        return user
    } catch (error) {
        return null
    }

}

export async function editUser(values: EditUser) {
    try {
        const user = await getCurrentUser()

        if (!user) throw new Error("user not found")

        const editUser = await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                email: values.email,
                username: values.username
            }
        })


        if (values.username) {
            cookies().delete("token")

            const oneDay = 24 * 60 * 60 * 1000
            const newToken = jwt.sign({ sub: user.id, username: values.username }, process.env.SECRET_KEY as string, { expiresIn: oneDay })
            cookies().set('token', newToken, { secure: true, maxAge: oneDay })
        }

        revalidateTag("user")

        return {
            message: "Update user successfully",
            data: {
                email: editUser.email,
                username: editUser.username
            }
        }
    } catch (error) {
        console.error((error as Error).message)
        throw new Error((error as Error).message)
    }
}

