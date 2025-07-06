import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    console.log('Middleware is running for /bienvenida');
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const url = request.nextUrl;

    if (!token) {
        return NextResponse.next();
    }

    if (url.pathname === '/bienvenida' && token.hasSeenWelcome) {
        return NextResponse.redirect(new URL('/home', request.url));
    }
    if (url.pathname === "/home" && !token.hasSeenWelcome) {
        console.log("🔒 Usuario no ha hecho la bienvenida, redirigiendo...");
        return NextResponse.redirect(new URL("/bienvenida", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/bienvenida", "/home"],
}