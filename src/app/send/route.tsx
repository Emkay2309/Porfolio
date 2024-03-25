import { Request, Response } from 'express';
import { NextResponse } from 'next/server'; // Adjusted import for Next.js
import { Resend } from 'resend'; // Assuming Resend is correctly imported

interface ReqProps {
 req: Request;
 res: Response;
}

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST({req, res}: ReqProps) {
 const { email, subject, message } = await req.json();
 console.log(email, subject, message);

 // Check if fromEmail is defined
 if (!fromEmail) {
    throw new Error('FROM_EMAIL environment variable is not set');
 }

 try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
 } catch (error) {
    return NextResponse.json({ error });
 }
}
