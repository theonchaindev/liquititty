import Link from "next/link"

const STEPS = [
  {
    num: "01",
    title: "Creator fees auto-claimed every 5 minutes",
    desc: "Once your token is live on pump.fun, our system continuously monitors your creator fee wallet. Every 5 minutes — automatically — fees are claimed on-chain via a scheduled keeper, 24/7.",
  },
  {
    num: "02",
    title: "Up to 100% of fees used to buy back your token",
    desc: "You choose your buyback rate at launch — anywhere from 50% to 100%. That percentage is immediately used to buy your token directly on the bonding curve, creating consistent upward price pressure.",
  },
  {
    num: "03",
    title: "After migration: 50% buyback + 50% LP on PumpSwap",
    desc: "When your token graduates and migrates to PumpSwap, the mechanism adapts automatically. 50% continues buying the token, 50% is deposited as liquidity. LP tokens are burned — permanently locking the pool.",
  },
  {
    num: "04",
    title: "Fully automated — no manual intervention needed",
    desc: "From launch to graduation and beyond, everything runs automatically. The buyback rate you set at launch is locked forever — proving to your community that buybacks cannot be turned off.",
  },
]

const FAQS = [
  { q: "Can I change my buyback rate after launch?", a: "No. The buyback rate is locked at launch. This is intentional — it proves to your community that you cannot turn off or reduce the buybacks." },
  { q: "What's the minimum buyback rate?", a: "50%. You can go up to 100% if you want maximum buyback pressure." },
  { q: "What happens if there are no creator fees?", a: "No trades = no fees = no claims. The system only runs when there's activity." },
  { q: "Who controls the LP tokens after migration?", a: "Nobody. LP tokens are burned immediately, permanently locking the liquidity in the PumpSwap pool." },
  { q: "Is there a fee to use LiquiTitty?", a: "A small protocol fee of 0.5 SOL per launch, plus standard Solana network fees for each claim transaction." },
  { q: "What is PumpSwap?", a: "pump.fun's native DEX. When a token graduates, it migrates to PumpSwap automatically — and LiquiTitty continues the mechanism there." },
]

export const metadata = {
  title: "How It Works | LiquiTitty",
  description: "Learn how LiquiTitty automatically claims creator fees and uses them to buy back your token every 5 minutes.",
}

export default function HowItWorksPage() {
  return (
    <div style={{ padding: "72px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How it works</p>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 20 }}>
            Automated buybacks,<br />permanently.
          </h1>
          <p style={{ color: "#666", fontSize: 17, lineHeight: 1.7, maxWidth: 520 }}>
            No dashboards to check. No buttons to click. Just set your rate at launch and let the protocol do the rest.
          </p>
        </div>

        {/* Key numbers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden", marginBottom: 72 }}>
          {[
            { value: "5 min", label: "Claim interval" },
            { value: "50–100%", label: "Buyback rate" },
            { value: "50 / 50", label: "Post-migration split" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#0C0C0C", padding: "28px 20px", textAlign: "center" }}>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", marginBottom: 6 }}>{s.value}</div>
              <div style={{ color: "#555", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 80 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 36, paddingBottom: 36 }}>
              <div style={{ width: 64, flexShrink: 0 }}>
                <span style={{ color: "#FF0099", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em" }}>{s.num}</span>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32 }}>FAQ</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}>
                <h4 style={{ fontWeight: 600, fontSize: 15, marginBottom: 10, color: "#FFFFFF" }}>{faq.q}</h4>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/launch" className="btn-primary" style={{ padding: "14px 40px", fontSize: 15 }}>
            Launch with Auto-Buyback
          </Link>
        </div>
      </div>
    </div>
  )
}
