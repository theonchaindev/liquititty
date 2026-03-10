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
  { icon: "🚀", num: "01", title: "Launch on pump.fun", desc: "Create your token and set your buyback rate — anywhere from 50% to 100% of creator fees." },
  { icon: "⏱️", num: "02", title: "Fees claimed every 5 mins", desc: "Our keeper claims your creator fees automatically, every 5 minutes, around the clock." },
  { icon: "🔄", num: "03", title: "Auto-buyback on the curve", desc: "Your set % is used to buy back your token on the bonding curve — constant buy pressure." },
  { icon: "💧", num: "04", title: "Post-migration: 50/50 split", desc: "After graduating to PumpSwap: 50% buys back, 50% is added as permanent locked LP." },
]

export default function Home() {
  return (
    <div>
      {/* ─── Hero ──────────────────────────────── */}
      <section className="grid-bg" style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        {/* Large radial glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,0,153,0.14) 0%, rgba(180,0,255,0.07) 40%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,0,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div className="badge-neon" style={{ marginBottom: 36, display: "inline-flex" }}>
            <span style={{ fontSize: 15 }}>⚡</span>
            <span style={{ color: "#FF44CC", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}>pump.fun × PumpSwap — Fully Automated</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(52px, 8.5vw, 96px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#FFFFFF" }}>Auto-buyback</span><br />
            <span className="gradient-text-bright">every 5 minutes.</span>
          </h1>

          {/* Sub */}
          <p style={{ color: "#9999BB", fontSize: "clamp(17px, 2.5vw, 22px)", maxWidth: 620, margin: "0 auto 48px", lineHeight: 1.65 }}>
            Launch on pump.fun. Set your buyback rate. Walk away. Creator fees are claimed and auto-bought every 5 minutes — on the bonding curve and on PumpSwap after migration.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
            <Link href="/launch" className="btn-primary animate-pulse-glow" style={{ padding: "16px 44px", fontSize: 18, borderRadius: 14, letterSpacing: "0.01em" }}>
              🚀 Launch a Token
            </Link>
            <Link href="/tokens" className="btn-outline" style={{ padding: "16px 44px", fontSize: 18, borderRadius: 14 }}>
              View Tokens
            </Link>
          </div>

          {/* Stat pills */}
          <div style={{ display: "inline-flex", gap: 2, background: "rgba(255,0,153,0.06)", border: "1px solid rgba(255,0,153,0.2)", borderRadius: 20, padding: "6px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { value: "5 min", label: "auto-claim" },
              { value: "50–100%", label: "buyback rate" },
              { value: "50/50", label: "post-migration" },
              { value: "0 clicks", label: "manual work" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 28px", textAlign: "center", borderRadius: 14, background: i === 3 ? "transparent" : "rgba(255,0,153,0.08)" }}>
                <div style={{ color: "#FF44CC", fontWeight: 900, fontSize: "clamp(20px, 3vw, 28px)", letterSpacing: "-0.01em", lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ color: "#7777AA", fontSize: 12, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ──────────────────────── */}
      <section className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 14 }}>How it works</h2>
            <p style={{ color: "#7777AA", fontSize: 18 }}>Fully automated. No manual intervention needed.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: "32px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg, rgba(255,0,153,0.2), rgba(180,0,255,0.15))", border: "1px solid rgba(255,0,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{s.icon}</div>
                  <span style={{ color: "rgba(255,0,153,0.2)", fontSize: 40, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 19, marginBottom: 10, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ color: "#7777AA", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Recent launches ───────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 8 }}>Recent Launches</h2>
              <p style={{ color: "#7777AA", fontSize: 16, margin: 0 }}>Auto-buyback enabled on every token</p>
            </div>
            <Link href="/tokens" className="btn-outline" style={{ padding: "11px 26px", fontSize: 14 }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 20 }}>
            {MOCK_TOKENS.map(t => <TokenCard key={t.address} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ────────────────────────── */}
      <section className="section-dark" style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,0,153,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 24, filter: "drop-shadow(0 0 20px rgba(255,0,153,0.6))" }}>🔄</div>
          <h2 style={{ fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.1 }}>
            <span className="gradient-text">Set it. Launch it.</span><br />
            <span style={{ color: "#FFFFFF" }}>Watch it buy.</span>
          </h2>
          <p style={{ color: "#7777AA", marginBottom: 40, fontSize: 18, lineHeight: 1.65 }}>
            Join 1,247 builders using automated buybacks to build real price support — without lifting a finger.
          </p>
          <Link href="/launch" className="btn-primary" style={{ padding: "18px 56px", fontSize: 20, borderRadius: 16, display: "inline-flex" }}>
            🚀 Launch Now
          </Link>
        </div>
      </section>
    </div>
  )
}
