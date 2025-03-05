import { Bungee } from "next/font/google"
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const Font = Bungee({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Font.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Head>
          <link rel="icon" href="/images/favicon.ico" />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
