import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const services = await db.exitService.findMany({
      include: {
        exitRequests: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
            startup: {
              select: {
                id: true,
                name: true,
                category: true,
              },
            },
          },
        },
      },
      where: {
        isActive: true,
      },
    });

    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching exit services:", error);
    return NextResponse.json(
      { error: "Failed to fetch exit services" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      type,
      price,
      provider,
      duration,
    } = body;

    const service = await db.exitService.create({
      data: {
        name,
        description,
        type,
        price,
        currency: "INR",
        provider,
        duration,
        isActive: true,
      },
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.error("Error creating exit service:", error);
    return NextResponse.json(
      { error: "Failed to create exit service" },
      { status: 500 }
    );
  }
}