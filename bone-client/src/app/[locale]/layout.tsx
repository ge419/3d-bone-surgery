import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import ResponsiveNav from "../../components/Navigation/ResponsiveNav";
import { Provider } from "../provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Bone Surgery",
  description: "3D Bone Surgery Platform",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const messages = getMessages();
  return (
    <html lang={locale}>
      <Provider>
        <NextIntlClientProvider messages={messages}>
          <body className={poppins.className}>
            <ResponsiveNav />
            {children}
          </body>
        </NextIntlClientProvider>
      </Provider>
    </html>
  );
}
