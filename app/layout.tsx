import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Sudarshan Chikkathimmaiah | AI/ML Portfolio",
  description: "Master's student in Artificial Intelligence at San José State University. Portfolio showcasing AI/ML projects, research, and publications in NLP, Computer Vision, and Large Language Models.",
  keywords: ["AI", "Machine Learning", "NLP", "Computer Vision", "LLM", "RAG", "Portfolio"],
  authors: [{ name: "Sudarshan Chikkathimmaiah" }],
  icons: {
    icon: [
      { url: '/icon.svg?v=2', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
