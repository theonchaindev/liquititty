export default function StatsBar() {
  const stats = [
    { label: "Tokens Launched", value: "1,247", suffix: "" },
    { label: "Total Buyback Volume", value: "$6.8M", suffix: "" },
    { label: "Fees Auto-Claimed", value: "$8.5M", suffix: "" },
    { label: "Avg Buyback Rate", value: "80", suffix: "%" },
    { label: "Post-Migration LPs", value: "312", suffix: "" },
  ]
  return (
    <div style={{ background: "#111118", borderBottom: "1px solid rgba(255,255,255,0.05)", overflowX: "auto" }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-12 whitespace-nowrap">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span style={{ color: "#8888AA", fontSize: 12 }}>{s.label}</span>
            <span style={{ color: "#FF0090", fontSize: 14, fontWeight: 700 }}>
              {s.value}{s.suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
