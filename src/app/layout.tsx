import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Red_Hat_Mono} from "next/font/google"
import Navbar from "./navbar";

const redHatMono = Red_Hat_Mono({
weight: "700",

});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={redHatMono.className }
      > 
      <div className="bg-bg antialiased">

        <Navbar />
        {children}
      </div>
      </body>
    </html>
  );
}
