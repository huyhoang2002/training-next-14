import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js",
  appleWebApp: {
    title: "Next.js"
  }
}

export default function RootLayout({
  children,
  analytics,
  team
}: Readonly<{
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="p-[20px]">{children}</div>
      </body>
    </html>
  );
}
