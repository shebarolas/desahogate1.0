import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: String;
            name?: String;
            email?: String;
            image?: String | null;
        }
    }
    interface User {
        id: String;
        name?: String;
        email?: String;
        image?: String | null;
    }

}


declare module "next-auth/jwt" {
    interface JWT {
        id: String;
        email?: String;
    }
}