import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Flora & Ponjul — 2nd May 2026",
  description:
    "Join us as we celebrate the wedding of Flora Manzwet Jonathan and Ponjul Nanzing Nden. 2nd May 2026 · Jos, Nigeria.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Flora & Ponjul — 2nd May 2026",
    description: "You're invited to our wedding celebration in Jos, Nigeria.",
    type: "website",
    images: ["/images/invite.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}