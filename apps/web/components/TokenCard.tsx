import Link from "next/link"

interface TokenCardProps {
  name: string
  symbol: string
  imageUrl?: string | null
  lpPercentage: number
  lpValue: number
  totalRaised: number
  launchedAt: string
  address: string
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

export default function TokenCard({ name, symbol, imageUrl, lpPercentage, lpValue, totalRaised, launchedAt, address }: TokenCardProps) {
  return (
    <div className="card" style={{ padding: 22 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: imageUrl ? undefined : "linear-gradient(135deg, #FF0099, #B400FF)",
          overflow: "hidden",
          flexShrink: 0,
          border: "1px solid rgba(255,0,153,0.3)",
          boxShadow: "0 0 16px rgba(255,0,153,0.2)",
        }}>
          {imageUrl && <img src={imageUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#FFFFFF", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", letterSpacing: "-0.01em" }}>{name}</span>
          <span style={{ color: "#7777AA", fontSize: 13, fontWeight: 500 }}>${symbol}</span>
        </div>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,0,153,0.18), rgba(180,0,255,0.12))",
          border: "1px solid rgba(255,0,153,0.4)",
          borderRadius: 8,
          padding: "4px 11px",
          fontSize: 12,
          fontWeight: 700,
          color: "#FF44CC",
          flexShrink: 0,
          boxShadow: "0 0 10px rgba(255,0,153,0.12)",
        }}>
          {lpPercentage}% buyback
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        <div style={{ background: "rgba(255,0,153,0.06)", border: "1px solid rgba(255,0,153,0.12)", borderRadius: 12, padding: "12px 14px" }}>
          <div style={{ color: "#7777AA", fontSize: 11, marginBottom: 5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>Buyback Vol</div>
          <div style={{
            fontWeight: 800,
            fontSize: 17,
            background: "linear-gradient(90deg, #FF0099, #CC00FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>{formatNumber(lpValue)}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px" }}>
          <div style={{ color: "#7777AA", fontSize: 11, marginBottom: 5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>Fees Claimed</div>
          <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 17 }}>{formatNumber(totalRaised)}</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#5555AA", fontSize: 12 }}>{timeAgo(launchedAt)}</span>
        <Link href={`/token/${address}`} className="btn-outline" style={{ padding: "7px 18px", fontSize: 13 }}>
          View →
        </Link>
      </div>
    </div>
  )
}
