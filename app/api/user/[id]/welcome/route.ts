import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type WelcomeStatus = {
    hasSeenWelcome: boolean;
}

export async function PUT(req: Request, context: {params: {id: string}}) {

    const {id: userId} = await context.params;
    const session = await getServerSession(authOptions);
    const body: WelcomeStatus = await req.json();
    const {hasSeenWelcome} = body;

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email as string
        },
        select: {
            id: true
        }
    })

    if(!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if(user.id !== userId) {
        return NextResponse.json({ error: "El id del usuario autenticado no coincide" }, { status: 403 });
    }

    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            hasSeenWelcome: hasSeenWelcome
        }
    })

    return NextResponse.json({message: "Welcome status updated successfully"}, { status: 200 });
   
}


