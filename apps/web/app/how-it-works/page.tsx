import Link from "next/link"

const STEPS = [
  {
    icon: "🪙",
    title: "Token Creation",
    desc: "You create your token through LiquiTitty's launchpad. We handle the pump.fun smart contract deployment, giving you a standard pump.fun token with all the familiar bonding curve mechanics.",
    detail: "Your token starts with the standard pump.fun bonding curve. When it reaches the graduation threshold (~$69k market cap), it migrates to a Raydium liquidity pool."
  },
  {
    icon: "⚙️",
    title: "LP Allocation Setup",
    desc: "Before launch, you choose your LP allocation percentage — anywhere from 10% to 100% of your dev fees. This is locked in at launch and cannot be changed.",
    detail: "A minimum of 10% ensures every token launched on LiquiTitty has meaningful liquidity backing. Tokens with higher LP allocations are marked with a 'Trust' badge."
  },
  {
    icon: "💸",
    title: "Dev Fees Intercepted",
    desc: "As people trade your token, pump.fun generates dev fees. Our smart contract intercepts these fees before they reach your wallet.",
    detail: "The fee interception happens on-chain through a custom program that sits between the pump.fun fee mechanism and your wallet."
  },
  {
    icon: "💧",
    title: "Auto-LP on Raydium",
    desc: "Your set percentage is automatically swapped and added as liquidity to your token's Raydium pool. The rest reaches your wallet as normal.",
    detail: "The LP tokens are burned, permanently locking the liquidity. This creates compounding, ever-growing liquidity that builds trust with traders."
  },
  {
    icon: "📈",
    title: "Compounding Liquidity",
    desc: "More trading = more dev fees = more LP. Your token's liquidity grows automatically with every trade, creating a virtuous cycle.",
    detail: "Traders can see the growing LP value on-chain, building confidence that the token has real backing and the dev isn't going to rug."
  },
]

export const metadata = {
  title: "How It Works | LiquiTitty",
  description: "Learn how LiquiTitty automatically routes dev fees into Raydium liquidity pools.",
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
          <p style={{ color: "#8888AA", fontSize: 18, lineHeight: 1.6 }}>
            Automatic liquidity pools for every token, built on trust and transparency.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 32, position: "relative" }}>
              {/* Line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
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
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{
                    background: "rgba(255,0,144,0.15)",
                    color: "#FF0090",
                    borderRadius: 6,
                    padding: "2px 10px",
                    fontSize: 12,
                    fontWeight: 700
                  }}>Step {i + 1}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 22, margin: 0 }}>{s.title}</h3>
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

        {/* FAQ */}
        <div style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 40, textAlign: "center" }}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "Can I change my LP allocation after launch?", a: "No. The LP allocation is locked in at launch to ensure trust. This is a feature, not a limitation — it proves to traders that you cannot rug the liquidity." },
              { q: "What happens to the LP tokens?", a: "LP tokens are burned upon creation, permanently locking the liquidity in the pool. This means the liquidity can never be removed." },
              { q: "Is there a fee to launch on LiquiTitty?", a: "LiquiTitty charges a small platform fee of 0.5 SOL per launch, plus standard Solana network fees." },
              { q: "What DEX does the LP go to?", a: "All liquidity pools are created on Raydium, the largest and most liquid DEX on Solana." },
              { q: "What's the minimum LP allocation?", a: "The minimum LP allocation is 10%. This ensures every token on LiquiTitty has at least some liquidity backing." },
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
            🚀 Ready to Launch?
          </Link>
        </div>
      </div>
    </div>
  )
}
