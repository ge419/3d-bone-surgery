import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "ko",
  localePrefix: "never",
  // localeDetection: true,
});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ko|en)/:path*"],
};
