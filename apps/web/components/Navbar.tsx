"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import WalletButton from "./WalletButton"

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: "/", label: "Home" },
    { href: "/launch", label: "Launch" },
    { href: "/tokens", label: "Tokens" },
    { href: "/how-it-works", label: "How It Works" },
  ]
  return (
    <nav
      style={{
        background: "rgba(6, 6, 18, 0.85)",
        borderBottom: "1px solid rgba(255, 0, 153, 0.2)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18" style={{ height: 72 }}>
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #FF0099, #B400FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            boxShadow: "0 0 20px rgba(255,0,153,0.5)",
          }}>💧</div>
          <span style={{
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }} className="gradient-text">LiquiTitty</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#FF44CC" : "#7777AA",
                fontWeight: pathname === l.href ? 700 : 400,
                fontSize: 14,
                letterSpacing: "0.01em",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
              }}
            >
              {l.label}
              {pathname === l.href && (
                <span style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, #FF0099, #B400FF)",
                  borderRadius: 1,
                  boxShadow: "0 0 8px rgba(255,0,153,0.8)",
                }} />
              )}
            </Link>
          ))}
        </div>
        <WalletButton />
      </div>
    </nav>
  )
}
