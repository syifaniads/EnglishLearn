import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Login",
  description: "TOEFL and IELTS preparation",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${dm_sans.className}`}>{children}</body>
    </html>
  );
}
