import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10-K Financial Dashboard",
  description: "Analysis dashboard for 10-K financial statements.",
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
