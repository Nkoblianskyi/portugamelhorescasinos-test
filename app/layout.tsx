import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PortugalMelhoresCasinos - Melhores Casinos Online Portugal 2025",
  description:
    "Classificação dos melhores casinos online em Portugal. Comparativo especializado com bónus, jogos e avaliações para escolher a melhor plataforma de casino.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
