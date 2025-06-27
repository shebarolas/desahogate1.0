import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "./LoginForm";

export default async function Page() {

    const session = await getServerSession(authOptions);
    if (session) {
        redirect('/bienvenida'); // If the user is already authenticated, redirect to the welcome page
    }
    return (
        <>
            <LoginForm />
        </>
    )

}

