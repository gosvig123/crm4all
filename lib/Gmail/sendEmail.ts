'use client';
// filename: SendEmail.ts
export const sendEmail = async (
  gapi: any,
  to: string,
  subject: string,
  message: string
) => {
  try {
    const emailData = [
      'Content-Type: text/html; charset="UTF-8"',
      'MIME-Version: 1.0',
      `To: ${to}`,
      `Subject: ${subject}`,
      '',
      message,
    ].join('\n');

    const base64EncodedEmail = btoa(emailData)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const response = await gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: base64EncodedEmail,
      },
    });

    console.log('Email sent:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
