import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "De Castro Media <onboarding@resend.dev>",
    to: "vince.decastro@acuitytrading.com",
    replyTo: email,
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
    text: `Name: ${name}
Company: ${company || "—"}
Email: ${email}
Service: ${service || "—"}

Message:
${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
