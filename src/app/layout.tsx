import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import localFont from 'next/font/local';

const chillax = localFont({
  src: '../../public/fonts/Chillax-Variable.woff2',
  variable: '--font-heading',
  display: 'swap',
});

const bagelFatOne = localFont({
  src: '../../public/fonts/BagelFatOne-Regular.ttf',
  display: 'swap',
});

const helveticaNeue = localFont({
  src: '../../public/fonts/helvetica-neue-55-cdnfonts/HelveticaNeue-Regular.ttf',
  variable: '--font-body',
  display: 'swap',
});

const geistSans = helveticaNeue; // For backward compatibility
const geistMono = helveticaNeue; // For backward compatibility

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${chillax.variable} ${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
