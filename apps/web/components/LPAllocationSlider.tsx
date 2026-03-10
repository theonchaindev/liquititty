"use client"

interface LPAllocationSliderProps {
  value: number
  onChange: (v: number) => void
}

export default function LPAllocationSlider({ value, onChange }: LPAllocationSliderProps) {
  const devKeeps = 100 - value

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Value display */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <label style={{ color: "#AAAACC", fontSize: 14, fontWeight: 500 }}>LP Allocation</label>
        <div style={{
          background: "rgba(255,0,144,0.15)",
          border: "1px solid rgba(255,0,144,0.3)",
          borderRadius: 8,
          padding: "4px 14px",
          color: "#FF0090",
          fontWeight: 800,
          fontSize: 18
        }}>
          {value}%
        </div>
      </div>

      {/* Slider */}
      <div style={{ position: "relative" }}>
        <input
          type="range"
          min={10}
          max={100}
          step={1}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "#FF0090",
            cursor: "pointer",
            height: 6,
            borderRadius: 3,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ color: "#8888AA", fontSize: 11 }}>10% min</span>
          <span style={{ color: "#8888AA", fontSize: 11 }}>100%</span>
        </div>
      </div>

      {/* Split visualization */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10,
          padding: "12px 16px",
          textAlign: "center"
        }}>
          <div style={{ color: "#8888AA", fontSize: 11, marginBottom: 4 }}>You Keep</div>
          <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 20 }}>{devKeeps}%</div>
          <div style={{ color: "#8888AA", fontSize: 10 }}>of dev fees</div>
        </div>
        <div style={{
          background: "rgba(255,0,144,0.08)",
          border: "1px solid rgba(255,0,144,0.2)",
          borderRadius: 10,
          padding: "12px 16px",
          textAlign: "center"
        }}>
          <div style={{ color: "#FF69B4", fontSize: 11, marginBottom: 4 }}>Auto-LP</div>
          <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 20 }}>{value}%</div>
          <div style={{ color: "#FF69B4", fontSize: 10 }}>→ Raydium pool</div>
        </div>
      </div>
    </div>
  )
}
