import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
