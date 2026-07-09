import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import MainNav from "@/components/MainNav";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kıratlılar Gıda",
  description:
    "Kıratlılar Gıda - 1985'ten bu yana doğal gıda üretimi ve Türkiye geneline toptan dağıtım.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <TopBar />
          <SiteHeader />
          <MainNav />
        </header>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
