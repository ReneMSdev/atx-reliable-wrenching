import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_API_KEY!,
      },
    })

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SITE_EMAIL}>`,
      to: process.env.SITE_EMAIL,
      replyTo: email,
      subject: `New Contact — ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('SMTP error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
