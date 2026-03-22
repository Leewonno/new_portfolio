import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/features";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-0QJXQ9B0H9" />
      )}
    </html>
  );
}
