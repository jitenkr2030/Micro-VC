import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Get all API subscriptions
    const subscriptions = await db.apiSubscription.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        apiKeys: true,
        usageStats: {
          orderBy: {
            timestamp: "desc",
          },
          take: 10,
        },
      },
    });

    return NextResponse.json({ subscriptions });
  } catch (error) {
    console.error("Error fetching API subscriptions:", error);
    return NextResponse.json(
      { error: "Failed to fetch API subscriptions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, plan, price } = body;

    // Create API subscription
    const subscription = await db.apiSubscription.create({
      data: {
        userId,
        plan,
        price,
        currency: "INR",
        status: "ACTIVE",
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
      },
    });

    return NextResponse.json({ subscription });
  } catch (error) {
    console.error("Error creating API subscription:", error);
    return NextResponse.json(
      { error: "Failed to create API subscription" },
      { status: 500 }
    );
  }
}