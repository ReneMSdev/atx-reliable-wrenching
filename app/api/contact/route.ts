import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, phone, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SITE_EMAIL, // siteInfo.email
    subject: 'New Contact Form Submission',
    replyTo: email,
    text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message: 
${message}
    `,
  })

  res.status(200).json({ success: true })
}
