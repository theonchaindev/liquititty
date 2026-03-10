import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params
  try {
    const token = await prisma.token.findUnique({
      where: { address },
      include: {
        liquidityEvents: {
          orderBy: { createdAt: "desc" },
          take: 20,
        },
      },
    })

    if (!token) {
      return NextResponse.json({ error: "Token not found" }, { status: 404 })
    }

    return NextResponse.json({ token })
  } catch (error) {
    console.error("GET /api/tokens/[address] error:", error)
    return NextResponse.json({ error: "Failed to fetch token" }, { status: 500 })
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params
  try {
    const body = await req.json()
    const { lpAddress, totalRaised, lpValue } = body

    const token = await prisma.token.update({
      where: { address },
      data: {
        ...(lpAddress !== undefined && { lpAddress }),
        ...(totalRaised !== undefined && { totalRaised }),
        ...(lpValue !== undefined && { lpValue }),
      },
    })

    return NextResponse.json({ token })
  } catch (error) {
    console.error("PATCH /api/tokens/[address] error:", error)
    return NextResponse.json({ error: "Failed to update token" }, { status: 500 })
  }
}
