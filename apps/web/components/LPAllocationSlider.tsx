"use client"

interface LPAllocationSliderProps {
  value: number
  onChange: (v: number) => void
}

export default function LPAllocationSlider({ value, onChange }: LPAllocationSliderProps) {
  const claimedDirectly = 100 - value

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Value display */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <label style={{ color: "#AAAACC", fontSize: 14, fontWeight: 500 }}>Buyback Rate</label>
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
          min={50}
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
          <span style={{ color: "#8888AA", fontSize: 11 }}>50% min</span>
          <span style={{ color: "#8888AA", fontSize: 11 }}>100%</span>
        </div>
      </div>

      {/* Split visualization — bonding curve phase */}
      <div style={{
        background: "#111118",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        overflow: "hidden"
      }}>
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <span style={{ color: "#8888AA", fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>While on bonding curve</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          <div style={{ padding: "14px 16px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ color: "#8888AA", fontSize: 11, marginBottom: 4 }}>You Receive</div>
            <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 20 }}>{claimedDirectly}%</div>
            <div style={{ color: "#8888AA", fontSize: 10 }}>paid out directly</div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            <div style={{ color: "#FF69B4", fontSize: 11, marginBottom: 4 }}>Auto Buyback</div>
            <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 20 }}>{value}%</div>
            <div style={{ color: "#FF69B4", fontSize: 10 }}>buys back on curve</div>
          </div>
        </div>
      </div>

      {/* Post-migration split — always 50/50 */}
      <div style={{
        background: "rgba(255,0,144,0.06)",
        border: "1px solid rgba(255,0,144,0.2)",
        borderRadius: 12,
        overflow: "hidden"
      }}>
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,0,144,0.1)" }}>
          <span style={{ color: "#FF69B4", fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>After migration to PumpSwap</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          <div style={{ padding: "14px 16px", borderRight: "1px solid rgba(255,0,144,0.1)" }}>
            <div style={{ color: "#FF69B4", fontSize: 11, marginBottom: 4 }}>Buyback</div>
            <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 20 }}>50%</div>
            <div style={{ color: "#FF69B4", fontSize: 10 }}>market buys</div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            <div style={{ color: "#FF69B4", fontSize: 11, marginBottom: 4 }}>Add LP</div>
            <div style={{ color: "#FF0090", fontWeight: 700, fontSize: 20 }}>50%</div>
            <div style={{ color: "#FF69B4", fontSize: 10 }}>→ PumpSwap pool</div>
          </div>
        </div>
      </div>
    </div>
  )
}
