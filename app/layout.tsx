import type { Metadata } from "next";
import { JetBrains_Mono, UnifrakturCook } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const unifraktur = UnifrakturCook({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Dark Valentine",
  description: "A gothic valentine experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${unifraktur.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
