import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params
  try {
    const { amount, txHash } = await req.json()

    if (!amount || !txHash) {
      return NextResponse.json({ error: "Missing amount or txHash" }, { status: 400 })
    }

    const token = await prisma.token.findUnique({
      where: { address },
    })

    if (!token) {
      return NextResponse.json({ error: "Token not found" }, { status: 404 })
    }

    const [event] = await prisma.$transaction([
      prisma.liquidityEvent.create({
        data: { tokenId: token.id, amount, txHash },
      }),
      prisma.token.update({
        where: { id: token.id },
        data: { lpValue: { increment: amount } },
      }),
    ])

    return NextResponse.json({ event }, { status: 201 })
  } catch (error) {
    console.error("POST /api/tokens/[address]/lp-event error:", error)
    return NextResponse.json({ error: "Failed to record LP event" }, { status: 500 })
  }
}
