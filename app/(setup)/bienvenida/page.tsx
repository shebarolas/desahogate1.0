import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import OnboardingSlider from "@/components/welcome/OnboardingSlider";


export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login'); // If the user is not authenticated, redirect to the login page
  }
  if (session.user.hasSeenWelcome) {
    redirect('/home');
    // If the user has already seen the welcome page, redirect to home
  }
  return (
    <>
      <OnboardingSlider />
    </>
  )
}
