import { Connection, PublicKey, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js"

export const RPC_URL =
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com"

export const connection = new Connection(RPC_URL, "confirmed")

export function shortAddress(address: string): string {
  if (!address || address.length < 12) return address
  return `${address.slice(0, 4)}...${address.slice(-4)}`
}

export function solToLamports(sol: number): number {
  return Math.floor(sol * LAMPORTS_PER_SOL)
}

export function lamportsToSol(lamports: number): number {
  return lamports / LAMPORTS_PER_SOL
}

export async function getBalance(walletAddress: string): Promise<number> {
  try {
    const pubkey = new PublicKey(walletAddress)
    const balance = await connection.getBalance(pubkey)
    return lamportsToSol(balance)
  } catch {
    return 0
  }
}
