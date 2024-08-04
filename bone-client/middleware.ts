import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth(
  (req) => {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
    //   if (!req.auth && req.nextUrl.pathname !== "/login") {
    //     const newUrl = new URL("/login", req.nextUrl.origin)
    //     return Response.redirect(newUrl)
    //   }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/admin"] };
