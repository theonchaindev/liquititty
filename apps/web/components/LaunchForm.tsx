"use client"
import { useState } from "react"
import LPAllocationSlider from "./LPAllocationSlider"

interface FormData {
  name: string
  symbol: string
  description: string
  imageUrl: string
  twitterUrl: string
  telegramUrl: string
  websiteUrl: string
  lpPercentage: number
  initialBuy: string
}

const STEPS = ["Token Info", "Socials", "LP Setup", "Review & Launch"]

export default function LaunchForm() {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [launched, setLaunched] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: "",
    symbol: "",
    description: "",
    imageUrl: "",
    twitterUrl: "",
    telegramUrl: "",
    websiteUrl: "",
    lpPercentage: 25,
    initialBuy: "0.5",
  })

  const update = (key: keyof FormData, value: string | number) =>
    setForm(f => ({ ...f, [key]: value }))

  const handleLaunch = async () => {
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 2000)) // simulate
      const res = await fetch("/api/tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          address: "mock_" + Math.random().toString(36).slice(2, 10),
          creatorWallet: "mock_wallet",
        }),
      })
      if (res.ok) setLaunched(true)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  if (launched) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🚀</div>
        <h2 className="gradient-text" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Token Launched!</h2>
        <p style={{ color: "#8888AA", marginBottom: 24 }}>Your token is live on pump.fun and the LP is active on Raydium.</p>
        <a href="/tokens" className="btn-primary" style={{ padding: "12px 32px", fontSize: 16 }}>View All Tokens</a>
      </div>
    )
  }

  const inputStyle = { padding: "12px 16px", fontSize: 14 }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      {/* Progress */}
      <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
        {STEPS.map((s, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" as const, gap: 6 }}>
            <div style={{
              height: 4,
              borderRadius: 2,
              background: i <= step ? "#FF0090" : "rgba(255,255,255,0.1)",
              transition: "background 0.3s"
            }} />
            <span style={{
              fontSize: 11,
              color: i === step ? "#FF0090" : i < step ? "#FF69B4" : "#8888AA",
              fontWeight: i === step ? 600 : 400
            }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Step 0: Token Info */}
      {step === 0 && (
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, color: "#FFFFFF" }}>Token Info</h2>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Token Name *</label>
            <input className="input-pink" style={inputStyle} placeholder="e.g. Degen Pepe" value={form.name} onChange={e => update("name", e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Symbol *</label>
            <input className="input-pink" style={inputStyle} placeholder="e.g. DPEPE" value={form.symbol} onChange={e => update("symbol", e.target.value.toUpperCase())} maxLength={10} />
          </div>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Description</label>
            <textarea className="input-pink" style={{ ...inputStyle, minHeight: 100, resize: "vertical" as const }} placeholder="Tell the world about your token..." value={form.description} onChange={e => update("description", e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Image URL</label>
            <input className="input-pink" style={inputStyle} placeholder="https://..." value={form.imageUrl} onChange={e => update("imageUrl", e.target.value)} />
          </div>
        </div>
      )}

      {/* Step 1: Socials */}
      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, color: "#FFFFFF" }}>Social Links</h2>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Twitter / X</label>
            <input className="input-pink" style={inputStyle} placeholder="https://x.com/yourtoken" value={form.twitterUrl} onChange={e => update("twitterUrl", e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Telegram</label>
            <input className="input-pink" style={inputStyle} placeholder="https://t.me/yourtoken" value={form.telegramUrl} onChange={e => update("telegramUrl", e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Website</label>
            <input className="input-pink" style={inputStyle} placeholder="https://yourtoken.com" value={form.websiteUrl} onChange={e => update("websiteUrl", e.target.value)} />
          </div>
        </div>
      )}

      {/* Step 2: LP Setup */}
      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, color: "#FFFFFF" }}>LP Setup</h2>
          <LPAllocationSlider value={form.lpPercentage} onChange={v => update("lpPercentage", v)} />
          <div>
            <label style={{ color: "#AAAACC", fontSize: 13, display: "block", marginBottom: 8 }}>Initial Dev Buy (SOL)</label>
            <input className="input-pink" style={inputStyle} type="number" min="0" step="0.1" placeholder="0.5" value={form.initialBuy} onChange={e => update("initialBuy", e.target.value)} />
            <p style={{ color: "#8888AA", fontSize: 12, marginTop: 6 }}>Optional initial buy to give your token momentum</p>
          </div>
          <div style={{
            background: "rgba(255,0,144,0.06)",
            border: "1px solid rgba(255,0,144,0.15)",
            borderRadius: 12,
            padding: 16
          }}>
            <p style={{ color: "#FF69B4", fontSize: 13, margin: 0 }}>
              💧 <strong>{form.lpPercentage}%</strong> of all dev fees will automatically route to your Raydium liquidity pool. This cannot be changed after launch.
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, color: "#FFFFFF" }}>Review & Launch</h2>
          <div style={{ background: "#111118", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {[
              { label: "Name", value: form.name || "—" },
              { label: "Symbol", value: `$${form.symbol}` || "—" },
              { label: "Description", value: form.description || "—" },
              { label: "Twitter", value: form.twitterUrl || "—" },
              { label: "Telegram", value: form.telegramUrl || "—" },
              { label: "LP Allocation", value: `${form.lpPercentage}% auto-LP on Raydium` },
              { label: "Initial Buy", value: `${form.initialBuy} SOL` },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: "#8888AA", fontSize: 13, width: 120, flexShrink: 0 }}>{r.label}</span>
                <span style={{ color: "#FFFFFF", fontSize: 13, wordBreak: "break-all" as const }}>{r.value}</span>
              </div>
            ))}
          </div>
          <div style={{
            background: "rgba(255,0,144,0.06)",
            border: "1px solid rgba(255,0,144,0.2)",
            borderRadius: 12,
            padding: 14
          }}>
            <p style={{ color: "#FF69B4", fontSize: 13, margin: 0 }}>
              By launching, you agree that <strong>{form.lpPercentage}%</strong> of dev fees will be permanently routed to a Raydium LP. This builds trust with your community.
            </p>
          </div>
          <button
            className="btn-primary animate-pulse-glow"
            style={{ padding: "16px 32px", fontSize: 18, width: "100%", borderRadius: 14 }}
            onClick={handleLaunch}
            disabled={loading}
          >
            {loading ? "Launching..." : "🚀 Launch Token"}
          </button>
        </div>
      )}

      {/* Navigation */}
      {step < 3 && (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
          <button
            className="btn-outline"
            style={{ padding: "10px 24px", opacity: step === 0 ? 0.3 : 1 }}
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            ← Back
          </button>
          <button
            className="btn-primary"
            style={{ padding: "10px 24px" }}
            onClick={() => setStep(s => s + 1)}
            disabled={step === 0 && (!form.name || !form.symbol)}
          >
            Next →
          </button>
        </div>
      )}
      {step === 3 && (
        <button
          className="btn-outline"
          style={{ padding: "10px 24px", marginTop: 16 }}
          onClick={() => setStep(2)}
        >
          ← Back
        </button>
      )}
    </div>
  )
}
