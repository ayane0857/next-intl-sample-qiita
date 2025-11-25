import { getLocale } from "next-intl/server";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-intl sample",
  description: "A sample project for next-intl",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
