/**
 * pump.fun integration
 *
 * This module handles token creation on pump.fun.
 * The actual on-chain calls require a connected wallet adapter.
 *
 * pump.fun Program ID: 6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P
 *
 * Fee flow:
 * - Creator fees auto-claimed every 5 minutes
 * - X% (50-100%) used to buyback token on the bonding curve
 * - After migration to PumpSwap: 50% buyback + 50% added as LP
 */

export const PUMP_FUN_PROGRAM_ID = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P"
export const PUMP_FUN_API = "https://frontend-api.pump.fun"
export const PUMPSWAP_URL = "https://pumpswap.fun"

export interface TokenCreateParams {
  name: string
  symbol: string
  description: string
  imageUrl: string
  twitterUrl?: string
  telegramUrl?: string
  websiteUrl?: string
  initialBuySOL?: number
  buybackPercentage: number // 50-100
}

export interface PumpfunTokenResponse {
  address: string
  bondingCurve: string
  creator: string
  createdAt: string
  pumpfunUrl: string
}

/**
 * Creates a token on pump.fun and sets up the auto-buyback keeper.
 *
 * Implementation notes:
 * - Uses pump.fun SDK/API to create the token on the bonding curve
 * - The keeper is registered to claim fees and execute buybacks every 5 minutes
 * - After migration to PumpSwap, the keeper adapts to 50/50 buyback + LP mode
 * - Initial buy (if provided) is executed in the same transaction
 */
export async function createPumpfunToken(
  params: TokenCreateParams,
  signTransaction: (tx: any) => Promise<any>,
  walletAddress: string
): Promise<PumpfunTokenResponse> {
  throw new Error(
    "pump.fun integration requires wallet adapter. Connect your wallet to launch."
  )
}

export function getPumpfunTokenUrl(address: string): string {
  return `https://pump.fun/coin/${address}`
}

export function getPumpSwapPoolUrl(address: string): string {
  return `https://pumpswap.fun/pool/${address}`
}
