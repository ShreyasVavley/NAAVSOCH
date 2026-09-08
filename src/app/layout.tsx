import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Tenor_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NaavSoch Studio | We Build Brands People Remember",
  description: "Strategy. Creativity. Technology. Growth. We help ambitious brands build authority, attract customers and scale through branding, content, websites and performance.",
  metadataBase: new URL('https://naavsoch.com'),
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NaavSoch Studio",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "NaavSoch Studio | We Build Brands People Remember",
    description: "Strategy. Creativity. Technology. Growth. We help ambitious brands build authority, attract customers and scale.",
    url: 'https://naavsoch.com',
    siteName: 'NaavSoch Studio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

import NextTopLoader from "nextjs-toploader";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${tenorSans.variable} ${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-transparent`}
      >
        <NextTopLoader 
          color="#407BFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #407BFF,0 0 5px #407BFF"
        />
        <CustomCursor />
        
        <div className="fixed inset-0 z-[-1] bg-black" />
        <ScrollProgress />
        <SmoothScroll />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
