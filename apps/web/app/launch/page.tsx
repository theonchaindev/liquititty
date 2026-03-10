import LaunchForm from "@/components/LaunchForm"

export const metadata = {
  title: "Launch a Token | LiquiTitty",
  description: "Launch your token on pump.fun with automatic buybacks and PumpSwap liquidity.",
}

export default function LaunchPage() {
  return (
    <div style={{ padding: "72px 24px", minHeight: "100vh", position: "relative" }}>
      {/* Background glow */}
      <div style={{ position: "fixed", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(180,0,255,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 52, textAlign: "center" }}>
          <div className="badge-neon" style={{ display: "inline-flex", marginBottom: 28 }}>
            <span style={{ color: "#FF44CC", fontSize: 13, fontWeight: 600 }}>⚡ pump.fun × PumpSwap</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
            Launch Your Token
          </h1>
          <p style={{ color: "#9999BB", fontSize: 17, maxWidth: 460, margin: "0 auto", lineHeight: 1.6 }}>
            Create your token and configure auto-buybacks in minutes. No code required.
          </p>
        </div>

        {/* Form */}
        <div className="card" style={{ padding: "44px 40px" }}>
          <LaunchForm />
        </div>
      </div>
    </div>
  )
}
