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
    <nav style={{ background: "#111118", borderBottom: "1px solid rgba(255,0,144,0.15)", backdropFilter: "blur(20px)" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span style={{ fontSize: 22 }}>💧</span>
          <span className="text-xl font-bold gradient-text">LiquiTitty</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: pathname === l.href ? "#FF0090" : "#8888AA",
                fontWeight: pathname === l.href ? 600 : 400,
                fontSize: 14,
                transition: "color 0.2s"
              }}
              className="hover:text-white"
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
