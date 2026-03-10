import LaunchForm from "@/components/LaunchForm"

export const metadata = {
  title: "Launch a Token | LiquiTitty",
  description: "Launch your token on pump.fun with automatic Raydium liquidity pool.",
}

export default function LaunchPage() {
  return (
    <div style={{ padding: "60px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,0,144,0.1)",
            border: "1px solid rgba(255,0,144,0.25)",
            borderRadius: 100,
            padding: "6px 18px",
            marginBottom: 24
          }}>
            <span style={{ color: "#FF69B4", fontSize: 13 }}>⚡ Powered by pump.fun + Raydium</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>
            Launch Your Token
          </h1>
          <p style={{ color: "#8888AA", fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.6 }}>
            Create your token and set up automatic liquidity in minutes. No code required.
          </p>
        </div>

        {/* Form card */}
        <div className="card" style={{ padding: "40px 40px" }}>
          <LaunchForm />
        </div>
      </div>
    </div>
  )
}
