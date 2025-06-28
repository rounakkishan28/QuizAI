import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  const { fullname, email, message } = await req.json();
  const mailOptions = {
    to: process.env.EMAIL_USER,
    subject: `New message from ${fullname}`,
    html: `
        <p>You received a new message from your contact form.</p>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    return NextResponse.json({ result: "Message Sent!" });
  });
  return NextResponse.json({ result: "Error!" });
}
