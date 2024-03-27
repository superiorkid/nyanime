import prisma from "@/lib/prisma"
import { getSession } from "./authentication.action"

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