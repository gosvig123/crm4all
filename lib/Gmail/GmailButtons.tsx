'use client';
// filename: GmailButtons.tsx// filename: GmailButtons.tsx
import React, { useEffect } from 'react';
import { authorizeAndInitialize } from '@/lib/Gmail/GmailAuth';
import { listEmails } from './readGmails';

const GmailButtons = () => {
  const [gapi, setGapi] = React.useState(null);

  useEffect(() => {
    const handleAuthorizeAndInitialize = async () => {
      const gapiInstance = await authorizeAndInitialize();
      setGapi(gapiInstance);
    };
    handleAuthorizeAndInitialize();
  }, []);

  return (
    <div>
      <button onClick={() => listEmails(gapi)}>List Emails</button>
    </div>
  );
};

export default GmailButtons;
