import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const partnerships = await db.partnership.findMany({
      include: {
        deals: {
          include: {
            startup: {
              select: {
                id: true,
                name: true,
                category: true,
                stage: true,
              },
            },
          },
        },
      },
      where: {
        status: "ACTIVE",
      },
    });

    return NextResponse.json({ partnerships });
  } catch (error) {
    console.error("Error fetching partnerships:", error);
    return NextResponse.json(
      { error: "Failed to fetch partnerships" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      type,
      description,
      website,
      contactEmail,
      contactPhone,
      partnershipTier,
      benefits,
    } = body;

    const partnership = await db.partnership.create({
      data: {
        name,
        type,
        description,
        website,
        contactEmail,
        contactPhone,
        partnershipTier,
        benefits: JSON.stringify(benefits || {}),
        status: "ACTIVE",
      },
    });

    return NextResponse.json({ partnership });
  } catch (error) {
    console.error("Error creating partnership:", error);
    return NextResponse.json(
      { error: "Failed to create partnership" },
      { status: 500 }
    );
  }
}