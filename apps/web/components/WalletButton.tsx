"use client"
import { useState } from "react"

export default function WalletButton() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState("")

  const handleClick = async () => {
    if (connected) {
      setConnected(false)
      setAddress("")
      return
    }
    // Will be replaced with real wallet adapter
    const mockAddr = "8xKt...3mPq"
    setConnected(true)
    setAddress(mockAddr)
  }

  return (
    <button
      onClick={handleClick}
      className="btn-primary"
      style={{ padding: "8px 18px", fontSize: 14 }}
    >
      {connected ? (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
          {address}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </button>
  )
}
