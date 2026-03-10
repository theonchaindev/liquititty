import TokenCard from "@/components/TokenCard"
import Link from "next/link"

async function getTokens() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const res = await fetch(`${baseUrl}/api/tokens`, { cache: "no-store" })
    if (!res.ok) return []
    const data = await res.json()
    return data.tokens || []
  } catch {
    return []
  }
}

// Mock tokens for display when DB is empty
const MOCK_TOKENS = [
  { id: "1", name: "Degen Pepe", symbol: "DPEPE", lpPercentage: 30, lpValue: 45000, totalRaised: 180000, launchedAt: new Date(Date.now() - 2 * 3600000).toISOString(), address: "mock1" },
  { id: "2", name: "Liquidity King", symbol: "LKING", lpPercentage: 50, lpValue: 120000, totalRaised: 340000, launchedAt: new Date(Date.now() - 5 * 3600000).toISOString(), address: "mock2" },
  { id: "3", name: "Pink Wojak", symbol: "PWOJAK", lpPercentage: 25, lpValue: 18000, totalRaised: 90000, launchedAt: new Date(Date.now() - 12 * 3600000).toISOString(), address: "mock3" },
  { id: "4", name: "Auto LP Cat", symbol: "ALPCAT", lpPercentage: 40, lpValue: 67000, totalRaised: 210000, launchedAt: new Date(Date.now() - 24 * 3600000).toISOString(), address: "mock4" },
  { id: "5", name: "Raydium Rat", symbol: "RRAT", lpPercentage: 15, lpValue: 8000, totalRaised: 55000, launchedAt: new Date(Date.now() - 36 * 3600000).toISOString(), address: "mock5" },
  { id: "6", name: "Dev Fee Slayer", symbol: "DFS", lpPercentage: 60, lpValue: 290000, totalRaised: 580000, launchedAt: new Date(Date.now() - 48 * 3600000).toISOString(), address: "mock6" },
  { id: "7", name: "Moon Ape", symbol: "MAPE", lpPercentage: 20, lpValue: 32000, totalRaised: 140000, launchedAt: new Date(Date.now() - 60 * 3600000).toISOString(), address: "mock7" },
  { id: "8", name: "Pump Protocol", symbol: "PUMP", lpPercentage: 35, lpValue: 78000, totalRaised: 260000, launchedAt: new Date(Date.now() - 72 * 3600000).toISOString(), address: "mock8" },
]

export const metadata = {
  title: "Launched Tokens | LiquiTitty",
  description: "Browse all tokens launched with automatic Raydium liquidity pools.",
}

export default async function TokensPage() {
  const dbTokens = await getTokens()
  const tokens = dbTokens.length > 0 ? dbTokens : MOCK_TOKENS

  return (
    <div style={{ padding: "60px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12 }}>Launched Tokens</h1>
          <p style={{ color: "#8888AA", fontSize: 16 }}>
            {tokens.length} tokens launched with automatic Raydium LP
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          {["Newest", "LP Value", "Total Raised", "Highest LP %"].map((f, i) => (
            <button
              key={f}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: `1px solid ${i === 0 ? "#FF0090" : "rgba(255,255,255,0.1)"}`,
                background: i === 0 ? "rgba(255,0,144,0.15)" : "transparent",
                color: i === 0 ? "#FF0090" : "#8888AA",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: i === 0 ? 600 : 400
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {tokens.map((t: any) => (
            <TokenCard
              key={t.id || t.address}
              name={t.name}
              symbol={t.symbol}
              imageUrl={t.imageUrl}
              lpPercentage={t.lpPercentage}
              lpValue={t.lpValue}
              totalRaised={t.totalRaised}
              launchedAt={t.launchedAt}
              address={t.address}
            />
          ))}
        </div>

        {/* Launch CTA */}
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <p style={{ color: "#8888AA", marginBottom: 20 }}>Want to launch with auto-LP?</p>
          <Link href="/launch" className="btn-primary" style={{ padding: "14px 36px", fontSize: 16, borderRadius: 12 }}>
            🚀 Launch Your Token
          </Link>
        </div>
      </div>
    </div>
  )
}
