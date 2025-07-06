import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { encode } from "next-auth/jwt";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }

  // Busca al usuario actualizado desde la base de datos
  const user = await prisma.user.findUnique({
    where: { id: session.user.id as string },
    select: {
      id: true,
      email: true,
      hasSeenWelcome: true,
      name: true,
      image: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Genera un nuevo token JWT
  const newToken = await encode({
    token: {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      hasSeenWelcome: user.hasSeenWelcome,
    },
    secret: process.env.NEXTAUTH_SECRET!,
  });

  const response = NextResponse.json({ ok: true });

  // Detecta si estamos en producción para usar __Secure
  const cookieName =
    process.env.NODE_ENV === "production"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token";

  response.cookies.set(cookieName, newToken, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
