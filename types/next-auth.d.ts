import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string;
            email?: string;
            image?: string | null;
            hasSeenWelcome?: boolean;
            
        }
    }
    interface User {
        id: string;
        name?: string;
        email?: string;
        image?: string | null;
        hasSeenWelcome?: boolean;
    }

}


declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email?: string;
        hasSeenWelcome?: boolean;
    }
}