import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "不合时宜",
  description: "通过做选择来理解生物、行为与历史的互动知识网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
