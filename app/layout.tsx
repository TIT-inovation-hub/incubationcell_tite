import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IncubationCell TITE",
  description:
    "IncubationCell TITE provides students and innovators with resources, mentorship, and programs to nurture creativity and launch successful projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-background text-foreground">
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
