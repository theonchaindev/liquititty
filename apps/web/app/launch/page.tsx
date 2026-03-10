import LaunchForm from "@/components/LaunchForm"

export const metadata = {
  title: "Launch a Token | LiquiTitty",
  description: "Launch your token on pump.fun with automatic buybacks and PumpSwap liquidity.",
}

export default function LaunchPage() {
  return (
    <div style={{ padding: "72px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "#FF0099", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>pump.fun × PumpSwap</p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12, lineHeight: 1.1 }}>
            Launch your token
          </h1>
          <p style={{ color: "#666", fontSize: 16, lineHeight: 1.6 }}>
            Create your token and configure auto-buybacks in minutes.
          </p>
        </div>

        <div className="card" style={{ padding: "36px 32px" }}>
          <LaunchForm />
        </div>
      </div>
    </div>
  )
}
