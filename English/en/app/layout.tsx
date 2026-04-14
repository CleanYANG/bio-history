import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evo-History",
  description:
    "A project exploring how people make decisions under different environments.",
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
