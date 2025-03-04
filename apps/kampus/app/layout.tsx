import { type ReactNode } from "react";
import { Inter } from "next/font/google";

import { RelayEnvironmentProvider } from "~/features/relay/RelayEnvironmentProvider";

import "./globals.css";

import { ThemeProvider } from "@kampus/ui-next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kamp.us",
  description: "topluluk",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RelayEnvironmentProvider>{children}</RelayEnvironmentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
