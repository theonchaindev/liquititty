import Link from "next/link"

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}

export default async function TokenDetailPage({ params }: { params: Promise<{ address: string }> }) {
  const { address: tokenAddress } = await params
  const token = {
    name: "Degen Pepe",
    symbol: "DPEPE",
    description: "The most degenerate Pepe on Solana, with automatic buybacks every 5 minutes thanks to LiquiTitty.",
    imageUrl: null,
    lpPercentage: 80,
    lpValue: 45000,
    totalRaised: 56000,
    launchedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    address: tokenAddress,
    twitterUrl: "https://x.com/dpepe",
    telegramUrl: "https://t.me/dpepe",
    creatorWallet: "8xKt...3mPq",
    holders: 342,
    volume24h: 28000,
    liquidityEvents: [
      { amount: 1200, txHash: "abc...def", createdAt: new Date(Date.now() - 3600000).toISOString() },
      { amount: 800, txHash: "ghi...jkl", createdAt: new Date(Date.now() - 7200000).toISOString() },
    ]
  }

  return (
    <div style={{ padding: "60px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* Back */}
        <Link href="/tokens" style={{ color: "#7777AA", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 36, textDecoration: "none", transition: "color 0.2s" }}>
          ← Back to Tokens
        </Link>

        {/* Token header */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 44, flexWrap: "wrap" }}>
          <div style={{
            width: 88,
            height: 88,
            borderRadius: 22,
            background: "linear-gradient(135deg, #FF0099, #B400FF)",
            border: "2px solid rgba(255,0,153,0.4)",
            flexShrink: 0,
            boxShadow: "0 0 30px rgba(255,0,153,0.3)",
          }}>
            {token.imageUrl && <img src={token.imageUrl} alt={token.name} style={{ width: "100%", height: "100%", borderRadius: 20, objectFit: "cover" }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
              <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, margin: 0, letterSpacing: "-0.02em" }}>{token.name}</h1>
              <span style={{ color: "#7777AA", fontSize: 22, fontWeight: 300 }}>${token.symbol}</span>
              <span style={{
                background: "linear-gradient(135deg, rgba(255,0,153,0.2), rgba(180,0,255,0.15))",
                border: "1px solid rgba(255,0,153,0.45)",
                borderRadius: 10,
                padding: "5px 14px",
                color: "#FF44CC",
                fontWeight: 700,
                fontSize: 14,
                boxShadow: "0 0 12px rgba(255,0,153,0.15)",
              }}>{token.lpPercentage}% buyback</span>
            </div>
            <p style={{ color: "#9999BB", margin: 0, fontSize: 15, lineHeight: 1.6 }}>{token.description}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 44 }}>
          {[
            { label: "Buyback Volume", value: formatNumber(token.lpValue), accent: true },
            { label: "Fees Claimed", value: formatNumber(token.totalRaised), accent: false },
            { label: "24h Volume", value: formatNumber(token.volume24h), accent: false },
            { label: "Holders", value: token.holders.toLocaleString(), accent: false },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "22px 24px" }}>
              <div style={{ color: "#7777AA", fontSize: 12, marginBottom: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              <div style={{ color: s.accent ? "#FF44CC" : "#FFFFFF", fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em" }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>
          {/* Buyback events */}
          <div className="card" style={{ padding: 30 }}>
            <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 24, letterSpacing: "-0.01em" }}>Buyback Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {token.liquidityEvents.map((e, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#09091A",
                  border: "1px solid rgba(255,0,153,0.12)",
                  borderRadius: 14,
                  padding: "16px 20px"
                }}>
                  <div>
                    <div style={{ color: "#FF44CC", fontWeight: 800, fontSize: 18 }}>{formatNumber(e.amount)}</div>
                    <div style={{ color: "#7777AA", fontSize: 12, marginTop: 3 }}>→ PumpSwap pool</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#9999BB", fontSize: 12, fontFamily: "monospace" }}>{e.txHash}</div>
                    <div style={{ color: "#7777AA", fontSize: 11, marginTop: 3 }}>{new Date(e.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Links */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {token.twitterUrl && (
                  <a href={token.twitterUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "11px 16px", fontSize: 13 }}>
                    🐦 Twitter / X
                  </a>
                )}
                {token.telegramUrl && (
                  <a href={token.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "11px 16px", fontSize: 13 }}>
                    ✈️ Telegram
                  </a>
                )}
                <a href={`https://pump.fun/coin/${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "11px 16px", fontSize: 13 }}>
                  🔥 pump.fun
                </a>
                <a href={`https://pumpswap.fun/pool/${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "11px 16px", fontSize: 13 }}>
                  💧 PumpSwap LP
                </a>
              </div>
            </div>

            {/* Creator */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Creator</h4>
              <div style={{ color: "#9999BB", fontSize: 13, fontFamily: "monospace" }}>{token.creatorWallet}</div>
            </div>

            {/* Buyback rate visual */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Buyback Rate</h4>
              <div style={{ marginBottom: 14 }}>
                <div style={{ height: 10, borderRadius: 5, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${token.lpPercentage}%`, background: "linear-gradient(90deg, #FF0099, #B400FF)", borderRadius: 5, boxShadow: "0 0 10px rgba(255,0,153,0.4)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                  <span style={{ color: "#FF44CC", fontSize: 14, fontWeight: 700 }}>{token.lpPercentage}% buyback</span>
                  <span style={{ color: "#7777AA", fontSize: 13 }}>{100 - token.lpPercentage}% to dev</span>
                </div>
              </div>
              <p style={{ color: "#7777AA", fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                Creator fees auto-claimed every 5 min. {token.lpPercentage}% buys back on the curve. After PumpSwap migration: 50% buyback + 50% LP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
