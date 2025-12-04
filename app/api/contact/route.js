import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { name, email, message, subject } = await req.json();

        // Transport setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: subject || "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
