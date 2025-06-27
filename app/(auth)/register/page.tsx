import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default async function Page() {

    const session = await getServerSession(authOptions);

    if (session) {
        return redirect('/home'); // If the user is already authenticated, do not render the registration form
    }

    return (
        <>
            <RegisterForm/>
        </>
    )
   
}
