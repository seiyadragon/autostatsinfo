import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Head from "next/head";
import Image from 'next/image';
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const pageName = "Home";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: `${pageName} - ASI: Know your ride`,
  description: "The best way to know your ride",
  keywords: "cars, motorcycles, trucks, parts, brands, vehicles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <link rel="icon" href="/images/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          />
        </Head>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <NavigationBar />
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <Footer />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
