import Link from "next/link"

const STEPS = [
  {
    icon: "⏱️",
    title: "Creator fees auto-claimed every 5 minutes",
    desc: "Once your token is live on pump.fun, our system continuously monitors your creator fee wallet. Every 5 minutes — automatically — fees are claimed on your behalf.",
    detail: "No need to log in, no button to click. The claim happens on-chain via a smart contract that runs on a scheduled keeper, 24/7.",
  },
  {
    icon: "🔄",
    title: "Up to 100% of fees used to buy back your token",
    desc: "You choose your buyback rate at launch — anywhere from 50% to 100% of claimed creator fees. That percentage is immediately used to buy your token directly on the bonding curve.",
    detail: "Buying on the bonding curve pushes the price up and reduces the supply available to sellers, creating consistent upward price pressure with every claim cycle.",
  },
  {
    icon: "🎓",
    title: "After migration: 50% buyback + 50% LP on PumpSwap",
    desc: "When your token graduates from pump.fun and migrates to PumpSwap, the mechanism automatically adapts. Fees split: 50% continues buying the token, 50% is deposited as liquidity.",
    detail: "The LP is added to your token's PumpSwap pool and the LP tokens are burned — permanently locking liquidity. This means the pool depth only ever grows, never shrinks.",
  },
  {
    icon: "🤖",
    title: "Fully automated — no manual intervention needed",
    desc: "From launch to graduation and beyond, everything runs automatically. You focus on building community; the protocol handles the buying pressure and liquidity.",
    detail: "The buyback rate you set at launch is locked in forever. This is a feature — it proves to your community that the buyback cannot be turned off or reduced.",
  },
]

export const metadata = {
  title: "How It Works | LiquiTitty",
  description: "Learn how LiquiTitty automatically claims creator fees and uses them to buy back your token every 5 minutes.",
}

export default function HowItWorksPage() {
  return (
    <div style={{ padding: "60px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 16 }}>
            How <span className="gradient-text">LiquiTitty</span> Works
          </h1>
          <p style={{ color: "#8888AA", fontSize: 18, lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
            Automated buybacks every 5 minutes. Permanent liquidity after migration. No manual work required.
          </p>
        </div>

        {/* Key numbers banner */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 72
        }}>
          {[
            { value: "5 min", label: "Claim interval", sub: "around the clock" },
            { value: "50–100%", label: "Buyback rate", sub: "you choose at launch" },
            { value: "50 / 50", label: "Post-migration split", sub: "buyback + PumpSwap LP" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,0,144,0.08)",
              border: "1px solid rgba(255,0,144,0.2)",
              borderRadius: 16,
              padding: "24px 16px",
              textAlign: "center"
            }}>
              <div style={{ color: "#FF0090", fontWeight: 900, fontSize: 28, marginBottom: 6 }}>{s.value}</div>
              <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: "#8888AA", fontSize: 12 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 32, position: "relative" }}>
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(255,0,144,0.15)",
                  border: "2px solid rgba(255,0,144,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1
                }}>
                  {s.icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 40, background: "rgba(255,0,144,0.2)", margin: "8px 0" }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < STEPS.length - 1 ? 48 : 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" as const }}>
                  <span style={{
                    background: "rgba(255,0,144,0.15)",
                    color: "#FF0090",
                    borderRadius: 6,
                    padding: "2px 10px",
                    fontSize: 12,
                    fontWeight: 700
                  }}>Step {i + 1}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 20, margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ color: "#AAAACC", fontSize: 16, lineHeight: 1.7, marginBottom: 12 }}>{s.desc}</p>
                <div style={{
                  background: "#111118",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "14px 18px"
                }}>
                  <p style={{ color: "#8888AA", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, textAlign: "center" }}>Fee Flow Diagram</h2>

          {/* Bonding curve phase */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ color: "#8888AA", fontSize: 12, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 12, textAlign: "center" }}>
              On bonding curve
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" as const, justifyContent: "center" }}>
              {[
                { label: "Creator Fees", bg: "#16161F", border: "rgba(255,255,255,0.1)", color: "#FFFFFF" },
                { label: "→", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "Claim\n(every 5 min)", bg: "rgba(255,0,144,0.1)", border: "rgba(255,0,144,0.3)", color: "#FF0090" },
                { label: "→", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "X% Buyback\non curve", bg: "rgba(255,0,144,0.15)", border: "rgba(255,0,144,0.4)", color: "#FF0090" },
                { label: "+", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "(100–X)%\nto you", bg: "#16161F", border: "rgba(255,255,255,0.1)", color: "#FFFFFF" },
              ].map((item, i) => (
                item.label === "→" || item.label === "+" ? (
                  <div key={i} style={{ color: item.color, fontSize: 20, padding: "0 8px" }}>{item.label}</div>
                ) : (
                  <div key={i} style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 600,
                    color: item.color,
                    whiteSpace: "pre-line" as const,
                    lineHeight: 1.4
                  }}>{item.label}</div>
                )
              ))}
            </div>
          </div>

          {/* Post-migration phase */}
          <div>
            <div style={{ color: "#FF69B4", fontSize: 12, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 12, textAlign: "center" }}>
              After migration to PumpSwap
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" as const, justifyContent: "center" }}>
              {[
                { label: "Creator Fees", bg: "#16161F", border: "rgba(255,255,255,0.1)", color: "#FFFFFF" },
                { label: "→", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "Claim\n(every 5 min)", bg: "rgba(255,0,144,0.1)", border: "rgba(255,0,144,0.3)", color: "#FF0090" },
                { label: "→", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "50% Buyback\nmarket buy", bg: "rgba(255,0,144,0.15)", border: "rgba(255,0,144,0.4)", color: "#FF0090" },
                { label: "+", bg: "transparent", border: "transparent", color: "#8888AA" },
                { label: "50% Add LP\nPumpSwap 🔒", bg: "rgba(255,0,144,0.08)", border: "rgba(255,0,144,0.25)", color: "#FF69B4" },
              ].map((item, i) => (
                item.label === "→" || item.label === "+" ? (
                  <div key={i} style={{ color: item.color, fontSize: 20, padding: "0 8px" }}>{item.label}</div>
                ) : (
                  <div key={i} style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 600,
                    color: item.color,
                    whiteSpace: "pre-line" as const,
                    lineHeight: 1.4
                  }}>{item.label}</div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 40, textAlign: "center" }}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Can I change my buyback rate after launch?", a: "No. The buyback rate is locked at launch. This is intentional — it proves to your community that you cannot turn off or reduce the buybacks. It's a trust signal, not a limitation." },
              { q: "What's the minimum buyback rate?", a: "50%. You must commit at least half of your creator fees to buying back your token. You can go up to 100% if you want the maximum buyback pressure." },
              { q: "What happens if there are no creator fees?", a: "If no trades happen, no fees are generated and no claims are made. The system only runs when there's activity — no wasted transactions." },
              { q: "Who controls the LP tokens after migration?", a: "Nobody. LP tokens are burned immediately upon creation, permanently locking the liquidity in the PumpSwap pool. The pool only ever grows." },
              { q: "Is there a fee to use LiquiTitty?", a: "LiquiTitty charges a small protocol fee of 0.5 SOL per launch, plus standard Solana network fees for each claim transaction." },
              { q: "What is PumpSwap?", a: "PumpSwap is pump.fun's native DEX. When a token graduates (reaches the ~$69k bonding curve target), it migrates to PumpSwap automatically. LiquiTitty continues the buyback + LP mechanism on PumpSwap after migration." },
            ].map((faq, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <h4 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#FFFFFF" }}>{faq.q}</h4>
                <p style={{ color: "#8888AA", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <Link href="/launch" className="btn-primary" style={{ padding: "16px 48px", fontSize: 18, borderRadius: 14 }}>
            🚀 Launch with Auto-Buyback
          </Link>
        </div>
      </div>
    </div>
  )
}
