import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const campaigns = await db.adCampaign.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        adCreatives: true,
        adMetrics: {
          orderBy: {
            date: "desc",
          },
          take: 30,
        },
      },
    });

    return NextResponse.json({ campaigns });
  } catch (error) {
    console.error("Error fetching ad campaigns:", error);
    return NextResponse.json(
      { error: "Failed to fetch ad campaigns" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userId,
      title,
      description,
      targetAudience,
      budget,
      startDate,
      endDate,
    } = body;

    const campaign = await db.adCampaign.create({
      data: {
        userId,
        title,
        description,
        targetAudience: JSON.stringify(targetAudience || {}),
        budget,
        spent: 0,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: "DRAFT",
      },
    });

    return NextResponse.json({ campaign });
  } catch (error) {
    console.error("Error creating ad campaign:", error);
    return NextResponse.json(
      { error: "Failed to create ad campaign" },
      { status: 500 }
    );
  }
}