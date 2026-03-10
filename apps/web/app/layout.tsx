import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import StatsBar from "@/components/StatsBar"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LiquiTitty — Launch with Instant Liquidity",
  description: "Launch tokens on pump.fun with automatic Raydium liquidity pools. Your dev fees, automatically compounding.",
  openGraph: {
    title: "LiquiTitty",
    description: "Launch tokens with auto-LP on Raydium",
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
