import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix copy",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="bg-bg-black min-h-screen text-text-white">
        <NextIntlClientProvider messages={{ ...messages }}>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
