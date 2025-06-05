import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miftah Iqbal FIrmansyah",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="relative h-[100dvh] flex flex-col items-center">
          <main className=" w-full h-full max-w-screen-sm  px-4 flex flex-col items-start gap-16 pt-4 sm:gap-48 sm:pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
