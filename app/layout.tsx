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
  title: `${site.name} — Observatory Log`,
  description: site.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
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
