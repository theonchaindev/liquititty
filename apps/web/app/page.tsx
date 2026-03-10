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
  { num: "01", title: "Launch on pump.fun", desc: "Create your token. Set your buyback rate — 50% to 100% of creator fees." },
  { num: "02", title: "Fees claimed automatically", desc: "Our keeper claims your creator fees every 5 minutes, around the clock." },
  { num: "03", title: "Auto-buyback on the curve", desc: "Your set percentage buys back your token directly on the bonding curve." },
  { num: "04", title: "Post-migration: 50/50 split", desc: "After graduating to PumpSwap: 50% buys back, 50% becomes permanent LP." },
]

export default function Home() {
  return (
    <div>
      {/* ─── Hero ──────────────────────────────── */}
      <section style={{ minHeight: "88vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px" }}>
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <p style={{ color: "#FF0099", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32 }}>
            pump.fun × PumpSwap — Fully Automated
          </p>

          <h1 style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Auto-buyback<br />
            <span className="gradient-text">every 5 minutes.</span>
          </h1>

          <p style={{ color: "#888", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, marginBottom: 48, maxWidth: 540, margin: "0 auto 48px" }}>
            Launch on pump.fun. Set your buyback rate. Creator fees are claimed and reinvested automatically — on the bonding curve and on PumpSwap after migration.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <Link href="/launch" className="btn-primary" style={{ padding: "14px 36px", fontSize: 15 }}>
              Launch a Token
            </Link>
            <Link href="/tokens" className="btn-outline" style={{ padding: "14px 36px", fontSize: 15 }}>
              View Tokens
            </Link>
          </div>

          <div style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "5 min", label: "auto-claim" },
              { value: "50–100%", label: "buyback rate" },
              { value: "0 clicks", label: "manual work" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ color: "#555", fontSize: 12, marginTop: 4, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ───────────────────────────── */}
      <hr className="divider" style={{ maxWidth: 1160, margin: "0 auto" }} />

      {/* ─── How it works ──────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>How it works</p>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1 }}>
              Set it once.<br />It runs forever.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ padding: "36px 32px", background: "#0C0C0C" }}>
                <div style={{ color: "#FF0099", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 20 }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ───────────────────────────── */}
      <hr className="divider" style={{ maxWidth: 1160, margin: "0 auto" }} />

      {/* ─── Recent launches ───────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Recent launches</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em" }}>Active tokens</h2>
            </div>
            <Link href="/tokens" className="btn-outline" style={{ padding: "10px 22px", fontSize: 13 }}>View all</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
            {MOCK_TOKENS.map(t => <TokenCard key={t.address} {...t} />)}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ────────────────────────── */}
      <hr className="divider" />
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Ready to launch?</p>
          <h2 style={{ fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            Launch with auto-buyback
          </h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 16, lineHeight: 1.65 }}>
            Join 1,247 builders using automated buybacks to create consistent buy pressure — without lifting a finger.
          </p>
          <Link href="/launch" className="btn-primary" style={{ padding: "15px 44px", fontSize: 16 }}>
            Launch a Token
          </Link>
        </div>
      </section>
    </div>
  )
}
