import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: String;
            name?: String;
            email?: String;
            image?: String | null;
            hasSeenWelcome?: boolean;
            
        }
    }
    interface User {
        id: String;
        name?: String;
        email?: String;
        image?: String | null;
        hasSeenWelcome?: boolean;
    }

}


declare module "next-auth/jwt" {
    interface JWT {
        id: String;
        email?: String;
        hasSeenWelcome?: boolean;
    }
}