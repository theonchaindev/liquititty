"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import WalletButton from "./WalletButton"

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: "/launch", label: "Launch" },
    { href: "/tokens", label: "Tokens" },
    { href: "/how-it-works", label: "How it works" },
  ]
  return (
    <nav
      style={{
        background: "rgba(12, 12, 12, 0.9)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      className="sticky top-0 z-50"
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="gradient-text" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>
            liquititty
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#FFFFFF" : "#666",
                fontWeight: pathname === l.href ? 500 : 400,
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <WalletButton />
      </div>
    </nav>
  )
}
