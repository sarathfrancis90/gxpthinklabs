import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, HONEYPOT_FIELD } from "@/lib/validations/contact";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !from || !to) {
    console.error("Contact form: missing RESEND_API_KEY / RESEND_FROM / CONTACT_TO");
    return NextResponse.json(
      {
        success: false,
        message: "Email service is not configured. Please try again later.",
      },
      { status: 500 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot trap: if the hidden field is populated, the submission is from a
  // bot. Return the same success response a real submission would get so the
  // bot can't tell the field is being checked.
  if (
    raw &&
    typeof raw === "object" &&
    typeof (raw as Record<string, unknown>)[HONEYPOT_FIELD] === "string" &&
    ((raw as Record<string, string>)[HONEYPOT_FIELD] ?? "").trim() !== ""
  ) {
    console.warn("Contact form: honeypot triggered, dropping silently.");
    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch shortly.",
    });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check your inputs and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, company, serviceInterest, message } = parsed.data;

  const subject = `New inquiry from ${name}${company ? ` (${company})` : ""}`;
  const fields: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Service Interest", serviceInterest || "—"],
  ];

  const text =
    fields.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessage:\n${message}\n`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New website inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${fields
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #555; vertical-align: top; white-space: nowrap;"><strong>${escapeHtml(
              k
            )}</strong></td>
            <td style="padding: 6px 0; vertical-align: top;">${escapeHtml(v)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <div style="white-space: pre-wrap; padding: 12px 16px; background: #f6f6f8; border-radius: 8px; border: 1px solid #eee;">${escapeHtml(
        message
      )}</div>
    </div>
  `;

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't deliver your message right now. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }

    console.log("Contact form sent:", data?.id);
    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch shortly.",
    });
  } catch (err) {
    console.error("Resend send threw:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
