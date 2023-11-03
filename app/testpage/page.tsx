'use client';
// filename: Page.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import { Button } from '@/components/ui/button';

const Page = () => {
  const handleClick = async () => {
    return fetch(
      'https://api.typeform.com/oauth/authorize?client_id=5vujD8k4DQ97UMeHycGqiyZ5yKdiFj7Uyuo8iAB1o1wg&redirect_uri=https://crm4all.vercel.app/&scope=forms:read+forms:write'
    );
  };
  return (
    <div>
      <h1>Page</h1>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
};

export default Page;
