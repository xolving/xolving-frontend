import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Header from "./components/Header/Header";
import "./globals.css";

const inter = LocalFont({
  src: "../public/fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "Facorb Cloud",
  description: "개발자를 위한 클라우드 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
