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
    <div className="card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: imageUrl ? undefined : "linear-gradient(135deg, #FF0090, #FF69B4)",
          overflow: "hidden",
          flexShrink: 0,
          border: "1px solid rgba(255,0,144,0.2)"
        }}>
          {imageUrl && <img src={imageUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</span>
          </div>
          <span style={{ color: "#8888AA", fontSize: 13 }}>${symbol}</span>
        </div>
        <div style={{
          background: "rgba(255,0,144,0.15)",
          border: "1px solid rgba(255,0,144,0.3)",
          borderRadius: 6,
          padding: "3px 10px",
          fontSize: 12,
          fontWeight: 700,
          color: "#FF0090",
          flexShrink: 0
        }}>
          {lpPercentage}% LP
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#111118", borderRadius: 10, padding: "10px 14px" }}>
          <div style={{ color: "#8888AA", fontSize: 11, marginBottom: 4 }}>LP Value</div>
          <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 15 }}>{formatNumber(lpValue)}</div>
        </div>
        <div style={{ background: "#111118", borderRadius: 10, padding: "10px 14px" }}>
          <div style={{ color: "#8888AA", fontSize: 11, marginBottom: 4 }}>Total Raised</div>
          <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15 }}>{formatNumber(totalRaised)}</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#8888AA", fontSize: 12 }}>{timeAgo(launchedAt)}</span>
        <Link
          href={`/token/${address}`}
          className="btn-outline"
          style={{ padding: "6px 16px", fontSize: 13 }}
        >
          View →
        </Link>
      </div>
    </div>
  )
}
