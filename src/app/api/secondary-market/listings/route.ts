import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const listings = await db.secondaryListing.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        investment: {
          include: {
            startup: {
              select: {
                id: true,
                name: true,
                category: true,
                rating: true,
              },
            },
          },
        },
        secondaryTrades: {
          include: {
            buyer: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
            seller: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
        },
      },
      where: {
        status: "LISTED",
      },
    });

    return NextResponse.json({ listings });
  } catch (error) {
    console.error("Error fetching secondary listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch secondary listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userId,
      investmentId,
      shares,
      pricePerShare,
      minInvestment,
      maxInvestment,
      expiresAt,
      description,
    } = body;

    // Calculate total value
    const totalValue = shares * pricePerShare;

    const listing = await db.secondaryListing.create({
      data: {
        userId,
        investmentId,
        shares,
        pricePerShare,
        totalValue,
        minInvestment,
        maxInvestment,
        status: "LISTED",
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        description,
      },
    });

    return NextResponse.json({ listing });
  } catch (error) {
    console.error("Error creating secondary listing:", error);
    return NextResponse.json(
      { error: "Failed to create secondary listing" },
      { status: 500 }
    );
  }
}