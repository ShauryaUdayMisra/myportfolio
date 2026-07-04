import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display-serif",
  style: ["normal", "italic"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  metadataBase: new URL(content.meta.siteUrl),
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.siteUrl,
    siteName: content.meta.name,
    images: [
      {
        url: content.meta.ogImage,
        width: 1200,
        height: 630,
        alt: content.meta.title,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [content.meta.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
