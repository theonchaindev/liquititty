import Link from "next/link"
import TokenCard from "@/components/TokenCard"

const MOCK_TOKENS = [
  { name: "Degen Pepe", symbol: "DPEPE", lpPercentage: 30, lpValue: 45000, totalRaised: 180000, launchedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), address: "mock1" },
  { name: "Liquidity King", symbol: "LKING", lpPercentage: 50, lpValue: 120000, totalRaised: 340000, launchedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), address: "mock2" },
  { name: "Pink Wojak", symbol: "PWOJAK", lpPercentage: 25, lpValue: 18000, totalRaised: 90000, launchedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), address: "mock3" },
  { name: "Auto LP Cat", symbol: "ALPCAT", lpPercentage: 40, lpValue: 67000, totalRaised: 210000, launchedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), address: "mock4" },
  { name: "Raydium Rat", symbol: "RRAT", lpPercentage: 15, lpValue: 8000, totalRaised: 55000, launchedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(), address: "mock5" },
  { name: "Dev Fee Slayer", symbol: "DFS", lpPercentage: 60, lpValue: 290000, totalRaised: 580000, launchedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), address: "mock6" },
]

const STEPS = [
  { icon: "🚀", title: "Launch on pump.fun", desc: "Create your token with a name, symbol, and image. We handle the pump.fun contract deployment." },
  { icon: "💧", title: "Set your LP %", desc: "Choose how much of your dev fees (min 10%) automatically routes to a Raydium liquidity pool." },
  { icon: "📈", title: "Watch it compound", desc: "Every trade generates dev fees. Your set percentage auto-compounds into real Raydium liquidity." },
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

        <div style={{ maxWidth: 780, textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,0,144,0.1)", border: "1px solid rgba(255,0,144,0.25)", borderRadius: 100, padding: "6px 18px", marginBottom: 32 }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ color: "#FF69B4", fontSize: 13, fontWeight: 500 }}>Built on pump.fun × Raydium</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Launch tokens.<br />
            <span className="gradient-text text-glow">Build real liquidity.</span>
          </h1>

          {/* Subheadline */}
          <p style={{ color: "#8888AA", fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.6 }}>
            The only launchpad that automatically routes your dev fees into a Raydium liquidity pool — creating sustainable, trust-backed tokens from day one.
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
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 24px", background: "#111118" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, marginBottom: 12 }}>How it works</h2>
          <p style={{ textAlign: "center", color: "#8888AA", marginBottom: 56 }}>Three steps to a liquidity-backed launch</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{s.icon}</div>
                <div style={{
                  display: "inline-block",
                  background: "rgba(255,0,144,0.15)",
                  color: "#FF0090",
                  borderRadius: 100,
                  width: 28,
                  height: 28,
                  lineHeight: "28px",
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 16
                }}>{i + 1}</div>
                <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#8888AA", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
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
              <p style={{ color: "#8888AA", margin: 0 }}>Tokens launched with auto-LP enabled</p>
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
          <div style={{ fontSize: 48, marginBottom: 20 }}>💧</div>
          <h2 className="gradient-text" style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Ready to launch?</h2>
          <p style={{ color: "#8888AA", marginBottom: 32, fontSize: 17, lineHeight: 1.6 }}>
            Join 1,247 builders who launched with real liquidity backing.
          </p>
          <Link href="/launch" className="btn-primary" style={{ padding: "16px 48px", fontSize: 18, borderRadius: 14 }}>
            🚀 Launch Now
          </Link>
        </div>
      </section>
    </div>
  )
}
