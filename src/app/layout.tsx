import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathematics Mastery with Moresh Kokane",
  description: "Expert mathematics tutoring focused on critical thinking and problem-solving. Small group sessions designed to foster deep understanding and prepare students for a future driven by AI and technology.",
  keywords: ["mathematics tutoring", "math tutor", "critical thinking", "problem solving", "scholarship preparation", "Moresh Kokane"],
  authors: [{ name: "Moresh Kokane" }],
  openGraph: {
    title: "Mathematics Mastery with Moresh Kokane",
    description: "Expert mathematics tutoring focused on critical thinking and problem-solving",
    images: ['/moresh.jpeg'],
  },
  icons: {
    icon: '/moresh.jpeg',
    apple: '/moresh.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://assets.calendly.com/assets/external/widget.js" async />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
