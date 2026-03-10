import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import StatsBar from "@/components/StatsBar"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LiquiTitty — Auto-Buyback Every 5 Minutes",
  description: "Launch tokens on pump.fun with automatic buybacks and PumpSwap liquidity. Creator fees claimed every 5 minutes. Fully automated.",
  openGraph: {
    title: "LiquiTitty — Auto-Buyback Every 5 Minutes",
    description: "Launch tokens on pump.fun with automatic buybacks and PumpSwap liquidity.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <StatsBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
