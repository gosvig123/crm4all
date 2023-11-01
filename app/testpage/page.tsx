'use client';
// filename: Page.tsx
import dynamic from 'next/dynamic';
import React from 'react';

const GmailButtons = dynamic(
  () => import('@/lib/Gmail/GmailButtons'),
  { ssr: false } // This will only load GmailButtons on the client-side
);

const Page = () => {
  return (
    <div>
      <h1>Page</h1>
      <GmailButtons />
    </div>
  );
};

export default Page;
