//  Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

// Theme Provider
import { ThemeProvider } from "next-themes";

// Global css
import "./globals.css";

// Clerk Provider
import { ClerkProvider } from "@clerk/nextjs";

// Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

// Metadata
export const metadata: Metadata = {
  title: "DamirHome",
  description: "Welcome to DamirHome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${interFont.className} ${barlowFont.variable} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
