import {NextResponse} from "next/server";
import bcrypt from "bcryptjs";
import {prisma} from "@/lib/prisma";

type User = {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: Request){
    try{
        const body: User = await req.json();
        const {name, email, password} = body;
        if(!name || !email || !password){
            return NextResponse.json({error: "All fields are required"}, {status: 400});
        }

        const exist = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(exist){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        if(!user){
            return NextResponse.json({error: "Error creating user"}, {status: 400});
        }

        return NextResponse.json({message: "User created", user}, {status: 201});
    }catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}