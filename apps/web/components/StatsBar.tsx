export default function StatsBar() {
  const stats = [
    { label: "Tokens Launched", value: "1,247" },
    { label: "Buyback Vol", value: "$6.8M" },
    { label: "Fees Claimed", value: "$8.5M" },
    { label: "Avg Buyback Rate", value: "80%" },
    { label: "PumpSwap LPs", value: "312" },
  ]
  return (
    <div style={{
      background: "#0C0C0C",
      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      overflowX: "auto",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", height: 40, display: "flex", alignItems: "center", gap: 40, whiteSpace: "nowrap" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#444", fontSize: 11, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</span>
            <span style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 600 }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
