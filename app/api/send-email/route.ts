import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body?.name ?? "").trim();
  const email = (body?.email ?? "").trim();
  const subject = (body?.subject ?? "").trim();
  const message = (body?.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  const user = process.env.CONTACT_EMAIL ?? "";
  const pass = process.env.CONTACT_EMAIL_PASS ?? "";

  if (!user || !pass) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    );
  }

  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  const refId = `REF-${Date.now()}`;

  const toOwner: Mail.Options = {
    from: user,
    to: user,
    replyTo: email,
    subject: `[${refId}] Portfolio contact: ${escapeHtml(subject)}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;background:#f3f4f6;padding:12px;border-radius:4px">${escapeHtml(message)}</pre>
    `.trim(),
  };

  const toSender: Mail.Options = {
    from: user,
    to: email,
    subject: `[${refId}] Thanks for reaching out, ${escapeHtml(name)}!`,
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for getting in touch! I've received your message and will get back to you within 1–2 business days.</p>
      <p><strong>Your message:</strong></p>
      <p style="background:#f3f4f6;padding:15px;border-radius:4px;border-left:3px solid #6366f1">
        ${escapeHtml(message).replace(/\n/g, "<br>")}
      </p>
      <p>Reference: <strong>${refId}</strong></p>
      <p>— Felister Wambui</p>
    `.trim(),
  };

  try {
    await transporter.sendMail(toOwner);
    await transporter.sendMail(toSender);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
