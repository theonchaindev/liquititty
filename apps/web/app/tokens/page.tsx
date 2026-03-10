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

const MOCK_TOKENS = [
  { id: "1", name: "Degen Pepe", symbol: "DPEPE", lpPercentage: 80, lpValue: 45000, totalRaised: 56000, launchedAt: new Date(Date.now() - 2 * 3600000).toISOString(), address: "mock1" },
  { id: "2", name: "Liquidity King", symbol: "LKING", lpPercentage: 100, lpValue: 120000, totalRaised: 150000, launchedAt: new Date(Date.now() - 5 * 3600000).toISOString(), address: "mock2" },
  { id: "3", name: "Pink Wojak", symbol: "PWOJAK", lpPercentage: 60, lpValue: 18000, totalRaised: 22000, launchedAt: new Date(Date.now() - 12 * 3600000).toISOString(), address: "mock3" },
  { id: "4", name: "Auto Buy Cat", symbol: "ABCAT", lpPercentage: 75, lpValue: 67000, totalRaised: 84000, launchedAt: new Date(Date.now() - 24 * 3600000).toISOString(), address: "mock4" },
  { id: "5", name: "PumpSwap Rat", symbol: "PRAT", lpPercentage: 50, lpValue: 8000, totalRaised: 10000, launchedAt: new Date(Date.now() - 36 * 3600000).toISOString(), address: "mock5" },
  { id: "6", name: "Fee Machine", symbol: "FEEM", lpPercentage: 90, lpValue: 290000, totalRaised: 360000, launchedAt: new Date(Date.now() - 48 * 3600000).toISOString(), address: "mock6" },
  { id: "7", name: "Moon Ape", symbol: "MAPE", lpPercentage: 70, lpValue: 32000, totalRaised: 40000, launchedAt: new Date(Date.now() - 60 * 3600000).toISOString(), address: "mock7" },
  { id: "8", name: "Pump Protocol", symbol: "PUMP", lpPercentage: 85, lpValue: 78000, totalRaised: 95000, launchedAt: new Date(Date.now() - 72 * 3600000).toISOString(), address: "mock8" },
]

export const metadata = {
  title: "Launched Tokens | LiquiTitty",
  description: "Browse all tokens launched with automatic buybacks and PumpSwap liquidity.",
}

export default async function TokensPage() {
  const dbTokens = await getTokens()
  const tokens = dbTokens.length > 0 ? dbTokens : MOCK_TOKENS

  return (
    <div style={{ padding: "72px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>All tokens</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
              Launched tokens
            </h1>
            <span style={{ color: "#555", fontSize: 14 }}>{tokens.length} tokens with auto-buyback</span>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36 }}>
          {["Newest", "Buyback Vol", "Fees Claimed", "Highest %"].map((f, i) => (
            <button
              key={f}
              style={{
                padding: "8px 18px",
                borderRadius: 6,
                border: `1px solid ${i === 0 ? "rgba(255,0,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                background: i === 0 ? "rgba(255,0,153,0.08)" : "transparent",
                color: i === 0 ? "#FF0099" : "#666",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: i === 0 ? 500 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
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

        <div style={{ textAlign: "center", marginTop: 80 }}>
          <p style={{ color: "#555", marginBottom: 20, fontSize: 15 }}>Want auto-buybacks on your token?</p>
          <Link href="/launch" className="btn-primary" style={{ padding: "13px 36px", fontSize: 15 }}>
            Launch a Token
          </Link>
        </div>
      </div>
    </div>
  )
}
