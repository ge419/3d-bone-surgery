import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import ResponsiveNav from "../components/Navigation/ResponsiveNav";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "3D Bone Surgery",
  description: "3D Bone Surgery Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
