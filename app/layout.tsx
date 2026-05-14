import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Navbar, Footer } from "@/components";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "LAB Defence solutions",
  description:
    " focused on defence technology, systems integration and strategic capability delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
