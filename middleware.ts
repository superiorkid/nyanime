import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const authRoute = ["/sign-in", "sign-up"]

export function middleware(request: NextRequest) {
    const token = cookies().has("token")

    if (token && authRoute.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    const splitRoute = request.nextUrl.pathname.split("/")

    if ((!token && splitRoute.includes("settings")) || (!token && splitRoute.includes("library"))) {
        return NextResponse.redirect(new URL("/sign-in", request.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}