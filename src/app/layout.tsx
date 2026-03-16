import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/features";

export const metadata: Metadata = {
  title: "Wonno Lee",
  description:
    "Frontend developer building modern and interactive web interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
