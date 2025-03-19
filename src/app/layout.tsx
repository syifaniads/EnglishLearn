import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sankodok",
  description: "TOEFL and IELTS preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
