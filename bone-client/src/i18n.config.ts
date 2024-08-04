import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Pathnames } from "next-intl/routing";

export const locales = ["en", "ko"] as const;
export const Locales = typeof locales;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
};

// export const pathnames: Pathnames<Locales> = {
//   "/": "/",
// };

// export const { Link, usePathname, useRouter, redirect } =
//   createSharedPathnamesNavigation({ locales, pathnames, localePrefix });
