import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import HomePage from "./homePage/HomePage";

export default async function page() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login'); // If the user is not authenticated, redirect to the login page
  }

  return (
    <>
      <HomePage/>
    </>
  )
}

