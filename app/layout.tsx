import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { LanguageProvider } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleTagManagerNoScript, GoogleTagManagerScript } from "@/components/google-tag-manager"
import { siteConfig } from "@/lib/site-config"
import { seo } from "@/lib/seo"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seo.home.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: seo.home.description,
  generator: "Next.js",
  keywords: [
    "MUSHE Trading",
    "food export USA",
    "container logistics",
    "food distributor supplier",
    "wholesale food trading",
    "import export logistics",
    "private label food export",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seo.home.title,
    description: seo.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0B2D6B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <GoogleTagManagerNoScript />
        <GoogleTagManagerScript />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="top-right" />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
