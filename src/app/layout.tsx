import { Notice } from "@/components/Notice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const inter = localFont({ 
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "xolving",
  description: "Developer Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Notice>🚧 현재 개발이 진행 중입니다.</Notice>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
