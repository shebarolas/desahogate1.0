import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function page() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login'); // If the user is not authenticated, redirect to the login page
  }

  return (
   <div className="">
    <Button onClick={()=> signOut({callbackUrl: '/login'})}>Cerrar sesion</Button>
   </div>
  );
}

