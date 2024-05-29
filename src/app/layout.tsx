import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./componets/global/Footer";
import Navbar from "./componets/home/Navbar";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devesh Portfolio",
  description: "Generated by Aman Thakur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
