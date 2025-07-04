'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export default function HomePage() {
    return (
        <div className="">
            <Button onClick={() => signOut({ callbackUrl: '/login' })}>Cerrar sesion</Button>
        </div>
    )
}
