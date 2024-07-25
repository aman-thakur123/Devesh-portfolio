import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Footer from "./componets/global/Footer";
import Navbar from "./componets/home/Navbar";

// Metadata for the application
export const metadata: Metadata = {
  title: "Devesh Portfolio",
  description: "Developed by Aman Thakur",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
