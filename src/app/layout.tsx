import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header";

const makenFont = localFont({
  src: '../../public/fonts/Maken.otf', 
  variable: '--font-maken',
})

export const metadata = {
  title: 'Danime - Art Meets Anime',
  description: 'Anime Inspired Clothing',
  icons: {
    icon: [
      {
        url: '/d-logo.png',
        href: '/d-logo.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/d-logo.png',
        href: '/d-logo.png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${makenFont.variable} antialiased bg-[#eaeaea]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
