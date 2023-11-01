'use client';
// filename: GmailButtons.tsx// filename: GmailButtons.tsx
import React, { useEffect } from 'react';
import { authorizeAndInitialize } from '@/lib/Gmail/GmailAuth';
import { sendEmail } from '@/lib/Gmail/sendEmail';

const GmailButtons = () => {
  const [gapi, setGapi] = React.useState(null);

  useEffect(() => {
    const handleAuthorizeAndInitialize = async () => {
      const gapiInstance = await authorizeAndInitialize();
      setGapi(gapiInstance);
    };
    handleAuthorizeAndInitialize();
  }, []);

  const handleSendEmail = async () => {
    if (!gapi) return;
    try {
      await sendEmail(
        gapi,
        'kristian_gosvig@hotmail.com',
        'Subject Text',
        '<p>Email body HTML content</p>'
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleSendEmail()}>List Emails</button>
    </div>
  );
};

export default GmailButtons;
