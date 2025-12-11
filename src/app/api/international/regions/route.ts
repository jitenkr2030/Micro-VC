import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const regions = await db.region.findMany({
      include: {
        startups: {
          select: {
            id: true,
            name: true,
            category: true,
            status: true,
          },
        },
        localizations: {
          where: {
            language: "en",
            isActive: true,
          },
        },
      },
    });

    return NextResponse.json({ regions });
  } catch (error) {
    console.error("Error fetching regions:", error);
    return NextResponse.json(
      { error: "Failed to fetch regions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      code,
      currency,
      timezone,
      regulations,
      taxInfo,
    } = body;

    const region = await db.region.create({
      data: {
        name,
        code,
        currency,
        timezone,
        regulations: JSON.stringify(regulations || {}),
        taxInfo: JSON.stringify(taxInfo || {}),
        isActive: false,
      },
    });

    return NextResponse.json({ region });
  } catch (error) {
    console.error("Error creating region:", error);
    return NextResponse.json(
      { error: "Failed to create region" },
      { status: 500 }
    );
  }
}