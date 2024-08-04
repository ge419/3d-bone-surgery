import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  // adapter:
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
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
