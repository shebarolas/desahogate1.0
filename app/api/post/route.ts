import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import {prisma} from "@/lib/prisma";
import { PostType } from "@prisma/client";

type PostProp = {
    content: string,
    title: string,
    type: string
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    try {
        if (!session?.user.id) {
            return NextResponse.json({ error: 'user no autenticado' }, { status: 401 });
        }

        const body: PostProp = await req.json();

        const {content, title} = body;

        if (!content || !title) {
            return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
        }

        const post = await prisma.post.create({
            data : {
                userId: session.user.id,
                content: content,
                title: title,
                type: PostType.diary
            }
        });

        if (!post) {
            return NextResponse.json({error : 'Error al crear el post'}, {status: 400})
        }

        return NextResponse.json({ messsage: 'Created post', post}, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: 'Error al crear la publicacion' }, { status: 400 })
    }
}