export default function StatsBar() {
  const stats = [
    { label: "Tokens Launched", value: "1,247" },
    { label: "Total Buyback Vol", value: "$6.8M" },
    { label: "Fees Auto-Claimed", value: "$8.5M" },
    { label: "Avg Buyback Rate", value: "80%" },
    { label: "PumpSwap LPs", value: "312" },
  ]
  return (
    <div style={{
      background: "rgba(9, 9, 26, 0.95)",
      borderBottom: "1px solid rgba(255, 0, 153, 0.12)",
      overflowX: "auto",
    }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-10 whitespace-nowrap">
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#5555AA", fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</span>
            <span style={{
              background: "linear-gradient(90deg, #FF0099, #CC00FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
