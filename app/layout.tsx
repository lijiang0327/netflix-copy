import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix copy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-bg-black min-h-screen text-text-white">
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
