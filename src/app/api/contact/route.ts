import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In production, integrate with email service (SendGrid, Resend, etc.)
    console.log("Contact form submission:", body);
    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message. We'll be in touch shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
