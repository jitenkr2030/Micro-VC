import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const subscriptionId = searchParams.get("subscriptionId");

    if (!subscriptionId) {
      return NextResponse.json(
        { error: "Subscription ID is required" },
        { status: 400 }
      );
    }

    const apiKeys = await db.apiKey.findMany({
      where: { subscriptionId },
    });

    return NextResponse.json({ apiKeys });
  } catch (error) {
    console.error("Error fetching API keys:", error);
    return NextResponse.json(
      { error: "Failed to fetch API keys" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subscriptionId, name, permissions } = body;

    // Generate API key
    const apiKey = `mkvc_${randomUUID()}`;

    const newKey = await db.apiKey.create({
      data: {
        subscriptionId,
        key: apiKey,
        name,
        permissions: JSON.stringify(permissions || []),
        rateLimit: 1000,
        isActive: true,
      },
    });

    return NextResponse.json({ apiKey: newKey });
  } catch (error) {
    console.error("Error creating API key:", error);
    return NextResponse.json(
      { error: "Failed to create API key" },
      { status: 500 }
    );
  }
}