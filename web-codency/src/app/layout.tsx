import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Web Codency - Professional Web Development Agency",
    template: "%s | Web Codency"
  },
  description: "Transform your digital presence with Web Codency. Expert web development, UI/UX design, and digital solutions for modern businesses. 50+ brands served, 98% satisfaction rate.",
  keywords: [
    "web development",
    "web design",
    "UI/UX design",
    "React development",
    "Next.js",
    "e-commerce",
    "CMS",
    "SEO optimization",
    "digital agency"
  ],
  authors: [{ name: "Web Codency Team" }],
  creator: "Web Codency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webcodency.com",
    siteName: "Web Codency",
    title: "Web Codency - Professional Web Development Agency",
    description: "Transform your digital presence with expert web development and design solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Codency - Professional Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Codency - Professional Web Development Agency",
    description: "Transform your digital presence with expert web development and design solutions.",
    images: ["/og-image.jpg"],
    creator: "@webcodency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://webcodency.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
