import Link from "next/link"
import TokenCard from "@/components/TokenCard"

const MOCK_TOKENS = [
  { name: "Degen Pepe", symbol: "DPEPE", lpPercentage: 80, lpValue: 45000, totalRaised: 56000, launchedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), address: "mock1" },
  { name: "Liquidity King", symbol: "LKING", lpPercentage: 100, lpValue: 120000, totalRaised: 150000, launchedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), address: "mock2" },
  { name: "Pink Wojak", symbol: "PWOJAK", lpPercentage: 60, lpValue: 18000, totalRaised: 22000, launchedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), address: "mock3" },
  { name: "Auto Buy Cat", symbol: "ABCAT", lpPercentage: 75, lpValue: 67000, totalRaised: 84000, launchedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), address: "mock4" },
  { name: "PumpSwap Rat", symbol: "PRAT", lpPercentage: 50, lpValue: 8000, totalRaised: 10000, launchedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(), address: "mock5" },
  { name: "Fee Machine", symbol: "FEEM", lpPercentage: 90, lpValue: 290000, totalRaised: 360000, launchedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), address: "mock6" },
]

const STEPS = [
  {
    icon: "🚀",
    title: "Launch on pump.fun",
    desc: "Create your token with a name, symbol, and image. Set your buyback rate between 50–100% of creator fees.",
  },
  {
    icon: "⏱️",
    title: "Fees auto-claimed every 5 mins",
    desc: "Our system claims your pump.fun creator fees automatically — every 5 minutes, around the clock. No manual intervention needed.",
  },
  {
    icon: "🔄",
    title: "Auto-buyback on the curve",
    desc: "Up to 100% of claimed fees are used to buy back your token directly on the bonding curve, creating continuous buy pressure.",
  },
  {
    icon: "💧",
    title: "After migration: 50/50 split",
    desc: "Once your token graduates to PumpSwap, fees split 50% buyback + 50% added as LP — building deep, permanent liquidity.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="grid-bg" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        {/* Pink glow blob */}
        <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,144,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: 800, textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,0,144,0.1)", border: "1px solid rgba(255,0,144,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ color: "#FF69B4", fontSize: 13, fontWeight: 500 }}>Built on pump.fun × PumpSwap</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Launch tokens.<br />
            <span className="gradient-text text-glow">Auto-buyback every 5 mins.</span>
          </h1>

          {/* Subheadline */}
          <p style={{ color: "#8888AA", fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Creator fees claimed every 5 minutes. Up to 100% auto-buys your token on the bonding curve. After migration: 50% buyback + 50% PumpSwap LP. Fully automated.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/launch" className="btn-primary animate-pulse-glow" style={{ padding: "14px 36px", fontSize: 17, borderRadius: 12 }}>
              🚀 Launch a Token
            </Link>
            <Link href="/tokens" className="btn-outline" style={{ padding: "14px 36px", fontSize: 17, borderRadius: 12 }}>
              View Tokens
            </Link>
          </div>

          {/* Mini stats */}
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 56, flexWrap: "wrap" }}>
            {[
              { value: "5 mins", label: "Fee claim interval" },
              { value: "50–100%", label: "Buyback rate" },
              { value: "50/50", label: "Post-migration split" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ color: "#FF0090", fontWeight: 800, fontSize: 22 }}>{s.value}</div>
                <div style={{ color: "#8888AA", fontSize: 12, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 24px", background: "#111118" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, marginBottom: 12 }}>How it works</h2>
          <p style={{ textAlign: "center", color: "#8888AA", marginBottom: 56 }}>Fully automated — no manual intervention needed</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
                <div style={{
                  display: "inline-block",
                  background: "rgba(255,0,144,0.15)",
                  color: "#FF0090",
                  borderRadius: 100,
                  width: 26,
                  height: 26,
                  lineHeight: "26px",
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 14
                }}>{i + 1}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#8888AA", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured tokens */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Recent Launches</h2>
              <p style={{ color: "#8888AA", margin: 0 }}>Tokens with auto-buyback enabled</p>
            </div>
            <Link href="/tokens" className="btn-outline" style={{ padding: "10px 24px" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {MOCK_TOKENS.map(t => (
              <TokenCard key={t.address} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: "80px 24px", background: "#111118", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🔄</div>
          <h2 className="gradient-text" style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Set it. Launch it. Watch it buy.</h2>
          <p style={{ color: "#8888AA", marginBottom: 32, fontSize: 17, lineHeight: 1.6 }}>
            Join 1,247 builders using automated buybacks to build real price support.
          </p>
          <Link href="/launch" className="btn-primary" style={{ padding: "16px 48px", fontSize: 18, borderRadius: 14 }}>
            🚀 Launch Now
          </Link>
        </div>
      </section>
    </div>
  )
}
