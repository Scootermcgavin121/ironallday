import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Honeypot + rate-limit protected inquiry endpoint for Iron All Day
// Sends to sales@ironallday.com via Google Workspace SMTP

const RATE_LIMIT = new Map<string, number[]>();
const MAX_PER_HOUR = 5;

const SMTP_PASS = process.env.SMTP_PASS?.trim() || "gxjwmkpqqkrswwfe";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "admin@cornerstonepm.ai",
    pass: SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // Honeypot: if "website" is filled, it's a bot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const now = Date.now();
    const timestamps = (RATE_LIMIT.get(ip) || []).filter(
      (t) => now - t < 3600000
    );
    if (timestamps.length >= MAX_PER_HOUR) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    RATE_LIMIT.set(ip, [...timestamps, now]);

    // Send email
    await transporter.sendMail({
      from: `"Iron All Day Contact Form" <admin@cornerstonepm.ai>`,
      to: "sales@ironallday.com",
      replyTo: `"${name}" <${email}>`,
      subject: `[Iron All Day] ${subject || "General Inquiry"}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject || "General Inquiry"}\n\n${message}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0A;">
          <div style="background: #1A1A1A; border-radius: 12px; padding: 32px; border: 1px solid rgba(255,255,255,0.05);">
            <h2 style="color: #F5F5F5; margin: 0 0 20px 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em;">New Inquiry</h2>
            <table style="width: 100%; font-size: 14px; color: #888;">
              <tr><td style="padding: 4px 0; font-weight: 700; color: #F5F5F5; width: 80px;">Name:</td><td style="padding: 4px 0; color: #F5F5F5;">${name}</td></tr>
              <tr><td style="padding: 4px 0; font-weight: 700; color: #F5F5F5;">Email:</td><td style="padding: 4px 0;"><a href="mailto:${email}" style="color: #FF4D00;">${email}</a></td></tr>
              <tr><td style="padding: 4px 0; font-weight: 700; color: #F5F5F5;">Topic:</td><td style="padding: 4px 0; color: #F5F5F5;">${subject || "General Inquiry"}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;" />
            <p style="font-size: 14px; color: #F5F5F5; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;" />
            <p style="font-size: 11px; color: #555; margin: 0;">IP: ${ip} · ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Inquiry error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
