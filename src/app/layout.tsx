import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
    icon: '/logo-v2.png',
    apple: '/logo-v2.png',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-transparent`}
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
        
          <div className="fixed inset-0 z-[-1] bg-black" />
          <ScrollProgress />
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}
