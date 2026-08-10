import type { Metadata } from "next";
import { Space_Mono, Inter, Pixelify_Sans } from "next/font/google";
import { Box } from "@chakra-ui/react";
import ChakraRootProvider from "@/components/ChakraRootProvider";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import site from "@/lib/site";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: site.defaultTitle,
    template: site.titleTemplate,
  },
  description: site.bio,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.website }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: site.website,
    siteName: site.defaultTitle,
    title: site.defaultTitle,
    description: site.bio,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.bio,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.website,
  jobTitle: site.role,
  description: site.bio,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.location,
  },
  sameAs: [site.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${spaceMono.variable} ${inter.variable} ${pixelifySans.variable}`}
      >
        <ChakraRootProvider>
          <Box minHeight="100dvh" display="flex" flexDirection="column">
            <NavBar />
            <Box as="main" flex="1" width="100%">
              {children}
            </Box>
            <Footer />
          </Box>
        </ChakraRootProvider>
      </body>
    </html>
  );
}
