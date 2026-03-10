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
    const mockAddr = "8xKt...3mPq"
    setConnected(true)
    setAddress(mockAddr)
  }

  return (
    <button
      onClick={handleClick}
      className={connected ? "btn-outline" : "btn-primary"}
      style={{ padding: "9px 20px", fontSize: 14, borderRadius: 10 }}
    >
      {connected ? (
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block", boxShadow: "0 0 8px #00FF88" }} />
          {address}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </button>
  )
}
