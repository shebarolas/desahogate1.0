import NextAuth, { Session, SessionStrategy, User } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";


export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'Text' },
                password: { label: 'Password', type: 'Text' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || !user.password) {
                    return null;
                }

                const isValidPassword = await bcrypt.compare(credentials.password, user.password);

                if (!isValidPassword) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email ?? undefined,
                    name: user.name ?? undefined,
                    image: user.image ?? undefined
                };

            }
        })
    ],
    pages: {
        signIn: '/login',
    },

    session : {
        strategy: 'jwt' as SessionStrategy,
    },

    callbacks : {
        async jwt({token, user}: {token: JWT, user?: User}) {
            if(user){
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },

        async session({session, token}: {session: Session, token: JWT}) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };