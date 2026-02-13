import type { Metadata } from "next";
import { Bricolage_Grotesque } from 'next/font/google'
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ralph Bryan Vertudez", // [3] Updated your site title
  description: "Currently under development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
