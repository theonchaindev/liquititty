import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "24")
    const sort = searchParams.get("sort") || "newest"

    const orderBy =
      sort === "lpValue"
        ? { lpValue: "desc" as const }
        : sort === "totalRaised"
        ? { totalRaised: "desc" as const }
        : sort === "lpPercentage"
        ? { lpPercentage: "desc" as const }
        : { launchedAt: "desc" as const }

    const [tokens, total] = await Promise.all([
      prisma.token.findMany({
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: { _count: { select: { liquidityEvents: true } } },
      }),
      prisma.token.count(),
    ])

    return NextResponse.json({ tokens, total, page, limit })
  } catch (error) {
    console.error("GET /api/tokens error:", error)
    return NextResponse.json({ error: "Failed to fetch tokens" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      address,
      name,
      symbol,
      description,
      imageUrl,
      twitterUrl,
      telegramUrl,
      websiteUrl,
      creatorWallet,
      lpPercentage,
      initialBuy,
    } = body

    if (!address || !name || !symbol || !creatorWallet || !lpPercentage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (lpPercentage < 10 || lpPercentage > 100) {
      return NextResponse.json({ error: "LP percentage must be between 10 and 100" }, { status: 400 })
    }

    const token = await prisma.token.create({
      data: {
        address,
        name,
        symbol,
        description: description || null,
        imageUrl: imageUrl || null,
        twitterUrl: twitterUrl || null,
        telegramUrl: telegramUrl || null,
        websiteUrl: websiteUrl || null,
        creatorWallet,
        lpPercentage: parseInt(lpPercentage),
      },
    })

    return NextResponse.json({ token }, { status: 201 })
  } catch (error: any) {
    console.error("POST /api/tokens error:", error)
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Token address already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Failed to create token" }, { status: 500 })
  }
}
