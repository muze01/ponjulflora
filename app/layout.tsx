// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Flora & Ponjul — 2nd May 2026",
//   description:
//     "Join us as we celebrate the wedding of Flora Manzwet Jonathan and Ponjul Nanzing Nden. 2nd May 2026 · Jos, Nigeria.",
//   openGraph: {
//     title: "Flora & Ponjul — 2nd May 2026",
//     description: "You're invited to our wedding celebration in Jos, Nigeria.",
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="antialiased">{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// 1. Optimize Google Fonts
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

// 2. Metadata API (Handles <head> automatically)
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
    images: ["/og-image.jpg"], // Optional: Add a real image path here
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
      <body className="antialiased">{children}</body>
    </html>
  );
}