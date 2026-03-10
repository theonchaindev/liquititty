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

        <Link href="/tokens" style={{ color: "#555", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 40, textDecoration: "none" }}>
          ← Back to tokens
        </Link>

        {/* Token header */}
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 48, flexWrap: "wrap" }}>
          <div style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#1E1E1E",
            border: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
            overflow: "hidden",
          }}>
            {token.imageUrl && <img src={token.imageUrl} alt={token.name} style={{ width: "100%", height: "100%", borderRadius: 14, objectFit: "cover" }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
              <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{token.name}</h1>
              <span style={{ color: "#555", fontSize: 18, fontWeight: 300 }}>${token.symbol}</span>
              <span style={{
                background: "rgba(255, 0, 153, 0.08)",
                border: "1px solid rgba(255, 0, 153, 0.18)",
                borderRadius: 6,
                padding: "3px 10px",
                color: "#FF0099",
                fontWeight: 600,
                fontSize: 13,
              }}>{token.lpPercentage}% buyback</span>
            </div>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>{token.description}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            { label: "Buyback Volume", value: formatNumber(token.lpValue) },
            { label: "Fees Claimed", value: formatNumber(token.totalRaised) },
            { label: "24h Volume", value: formatNumber(token.volume24h) },
            { label: "Holders", value: token.holders.toLocaleString() },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px 22px" }}>
              <div style={{ color: "#444", fontSize: 11, marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em" }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20, alignItems: "start" }}>
          {/* Buyback events */}
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Buyback Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {token.liquidityEvents.map((e, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 10,
                  padding: "14px 18px"
                }}>
                  <div>
                    <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 16 }}>{formatNumber(e.amount)}</div>
                    <div style={{ color: "#444", fontSize: 11, marginTop: 3 }}>PumpSwap pool</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#555", fontSize: 12, fontFamily: "monospace" }}>{e.txHash}</div>
                    <div style={{ color: "#444", fontSize: 11, marginTop: 3 }}>{new Date(e.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="card" style={{ padding: 22 }}>
              <h4 style={{ fontWeight: 600, fontSize: 12, marginBottom: 14, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em" }}>Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {token.twitterUrl && (
                  <a href={token.twitterUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>Twitter / X</a>
                )}
                {token.telegramUrl && (
                  <a href={token.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>Telegram</a>
                )}
                <a href={`https://pump.fun/coin/${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>pump.fun</a>
                <a href={`https://pumpswap.fun/pool/${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 16px", fontSize: 13 }}>PumpSwap LP</a>
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <h4 style={{ fontWeight: 600, fontSize: 12, marginBottom: 10, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em" }}>Creator</h4>
              <div style={{ color: "#555", fontSize: 13, fontFamily: "monospace" }}>{token.creatorWallet}</div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <h4 style={{ fontWeight: 600, fontSize: 12, marginBottom: 14, color: "#555", textTransform: "uppercase", letterSpacing: "0.06em" }}>Buyback Rate</h4>
              <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 10 }}>
                <div style={{ height: "100%", width: `${token.lpPercentage}%`, background: "#FF0099", borderRadius: 2 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ color: "#FF0099", fontSize: 13, fontWeight: 600 }}>{token.lpPercentage}% buyback</span>
                <span style={{ color: "#555", fontSize: 13 }}>{100 - token.lpPercentage}% to dev</span>
              </div>
              <p style={{ color: "#444", fontSize: 12, lineHeight: 1.6 }}>
                Claimed every 5 min. After PumpSwap migration: 50% buyback + 50% LP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
