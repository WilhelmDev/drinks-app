import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/common/Header'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="es">
      <body className='flex flex-col bg-gray-400' >
        <Header />
        {children}
      </body>
    </html>
  );
}
