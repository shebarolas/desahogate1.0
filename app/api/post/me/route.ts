import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { error } from "console";
import prisma from "@/lib/prisma";

export async function GET(req:Request) {
    
    const session = await getServerSession(authOptions);

    if(!session || !session.user.id){
        return NextResponse.json({error: "usuario no autenticado"}, {status: 401})
    }

    const post = await prisma.post.findMany({
        where: {
            userId: session.user.id as string,
            visible: true
        },
        orderBy: {
            createAt: "asc"
        }
    });

    if (!post) {
        return NextResponse.json({error: "No existen post"}, {status: 400});
    }

    return NextResponse.json(post);
    
}