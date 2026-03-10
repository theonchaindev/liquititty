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
    setConnected(true)
    setAddress("8xKt...3mPq")
  }

  return (
    <button
      onClick={handleClick}
      className={connected ? "btn-outline" : "btn-primary"}
      style={{ padding: "8px 18px", fontSize: 13 }}
    >
      {connected ? (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00CC66", display: "inline-block" }} />
          {address}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </button>
  )
}
