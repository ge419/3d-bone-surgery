import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
// import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/mongodb";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");

        const userRole = user.email === "ge419@naver.com" ? "admin" : "user";
        user.role = userRole;
        // const role = user.role || "user";

        return {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Attach the role to the JWT token
      if (user) {
        token.role = user.role as String;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the role to the session object
      // if (session?.user) session.user.role = token.role;
      if (session?.user && token) {
        (token.role as string) ?? "user";
      }
      return session;
    },
  },
  // session: {
  //   strategy: "jwt",
  // },
});
