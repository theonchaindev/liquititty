import Link from "next/link"

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}

export default async function TokenDetailPage({ params }: { params: Promise<{ address: string }> }) {
  const { address: tokenAddress } = await params
  // Mock data — will be fetched from DB/on-chain
  const token = {
    name: "Degen Pepe",
    symbol: "DPEPE",
    description: "The most degenerate Pepe on Solana, now with real liquidity backing thanks to LiquiTitty.",
    imageUrl: null,
    lpPercentage: 30,
    lpValue: 45000,
    totalRaised: 180000,
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
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Back */}
        <Link href="/tokens" style={{ color: "#8888AA", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32, textDecoration: "none" }}>
          ← Back to Tokens
        </Link>

        {/* Token header */}
        <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #FF0090, #FF69B4)",
            border: "2px solid rgba(255,0,144,0.3)",
            flexShrink: 0
          }}>
            {token.imageUrl && <img src={token.imageUrl} alt={token.name} style={{ width: "100%", height: "100%", borderRadius: 18, objectFit: "cover" }} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>{token.name}</h1>
              <span style={{ color: "#8888AA", fontSize: 20 }}>${token.symbol}</span>
              <span style={{
                background: "rgba(255,0,144,0.15)",
                border: "1px solid rgba(255,0,144,0.3)",
                borderRadius: 8,
                padding: "4px 12px",
                color: "#FF0090",
                fontWeight: 700,
                fontSize: 14
              }}>{token.lpPercentage}% Auto-LP</span>
            </div>
            <p style={{ color: "#8888AA", margin: "8px 0 0", fontSize: 15 }}>{token.description}</p>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { label: "LP Value", value: formatNumber(token.lpValue), accent: true },
            { label: "Total Raised", value: formatNumber(token.totalRaised), accent: false },
            { label: "24h Volume", value: formatNumber(token.volume24h), accent: false },
            { label: "Holders", value: token.holders.toLocaleString(), accent: false },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px 24px" }}>
              <div style={{ color: "#8888AA", fontSize: 12, marginBottom: 8 }}>{s.label}</div>
              <div style={{ color: s.accent ? "#FF0090" : "#FFFFFF", fontWeight: 800, fontSize: 24 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}>
          {/* Left: LP Events */}
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 20 }}>LP Funding Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {token.liquidityEvents.map((e, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#111118",
                  borderRadius: 10,
                  padding: "14px 18px"
                }}>
                  <div>
                    <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 16 }}>{formatNumber(e.amount)}</div>
                    <div style={{ color: "#8888AA", fontSize: 12, marginTop: 2 }}>→ Raydium Pool</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#8888AA", fontSize: 12 }}>{e.txHash}</div>
                    <div style={{ color: "#8888AA", fontSize: 11, marginTop: 2 }}>{new Date(e.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Links */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 600, fontSize: 15, marginBottom: 16 }}>Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {token.twitterUrl && (
                  <a href={token.twitterUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>
                    🐦 Twitter / X
                  </a>
                )}
                {token.telegramUrl && (
                  <a href={token.telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>
                    ✈️ Telegram
                  </a>
                )}
                <a href={`https://pump.fun/token/${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 16px", fontSize: 13 }}>
                  🔥 pump.fun
                </a>
                <a href={`https://raydium.io/liquidity/?pool=${token.address}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 16px", fontSize: 13 }}>
                  💧 Raydium LP
                </a>
              </div>
            </div>

            {/* Creator info */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 600, fontSize: 15, marginBottom: 16 }}>Creator</h4>
              <div style={{ color: "#8888AA", fontSize: 13, fontFamily: "monospace" }}>{token.creatorWallet}</div>
            </div>

            {/* LP allocation visual */}
            <div className="card" style={{ padding: 24 }}>
              <h4 style={{ fontWeight: 600, fontSize: 15, marginBottom: 16 }}>LP Allocation</h4>
              <div style={{ marginBottom: 12 }}>
                <div style={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${token.lpPercentage}%`, background: "linear-gradient(90deg, #FF0090, #FF69B4)", borderRadius: 4 }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ color: "#FF0090", fontSize: 13, fontWeight: 700 }}>{token.lpPercentage}% → LP</span>
                  <span style={{ color: "#8888AA", fontSize: 13 }}>{100 - token.lpPercentage}% dev</span>
                </div>
              </div>
              <p style={{ color: "#8888AA", fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                Every trade auto-routes {token.lpPercentage}% of dev fees to Raydium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
