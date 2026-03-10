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
    <div className="card" style={{ padding: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: imageUrl ? undefined : "#1E1E1E",
          overflow: "hidden",
          flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.07)",
        }}>
          {imageUrl && <img src={imageUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
          <span style={{ color: "#555", fontSize: 12 }}>${symbol}</span>
        </div>
        <div style={{
          background: "rgba(255, 0, 153, 0.08)",
          border: "1px solid rgba(255, 0, 153, 0.18)",
          borderRadius: 6,
          padding: "3px 9px",
          fontSize: 11,
          fontWeight: 600,
          color: "#FF0099",
          flexShrink: 0,
        }}>
          {lpPercentage}%
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ color: "#444", fontSize: 10, marginBottom: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Buyback Vol</div>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF" }}>{formatNumber(lpValue)}</div>
        </div>
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ color: "#444", fontSize: 10, marginBottom: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Fees Claimed</div>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF" }}>{formatNumber(totalRaised)}</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#444", fontSize: 12 }}>{timeAgo(launchedAt)}</span>
        <Link href={`/token/${address}`} className="btn-outline" style={{ padding: "6px 16px", fontSize: 12 }}>
          View
        </Link>
      </div>
    </div>
  )
}
