import NextAuth, { type NextAuthOptions } from "next-auth";
import Todoist from "next-auth/providers/todoist";
export const authOptions: NextAuthOptions = {
  providers: [
    Todoist({
      clientId: process.env.TODOIST_ID!,
      clientSecret: process.env.TODOIST_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
