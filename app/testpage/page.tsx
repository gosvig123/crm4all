'use client';
// filename: Page.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);

  const handleClick = () => {
    window.location.href =
      'https://api.typeform.com/oauth/authorize?client_id=5vujD8k4DQ97UMeHycGqiyZ5yKdiFj7Uyuo8iAB1o1wg&redirect_uri=https://crm4all.vercel.app/testpage/&scope=forms:read+forms:write';
  };

  const getAccessToken = async () => {
    if (!authCode) {
      return;
    }
    const response = await fetch(
      'https://api.typeform.com/oauth/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: authCode,
          client_id: '5vujD8k4DQ97UMeHycGqiyZ5yKdiFj7Uyuo8iAB1o1wg',
          client_secret:
            'Gnr5fup1gauwC8GhHV9XyPDacGh5typQsUK6ZKp4AJUr',
          redirect_uri: 'https://crm4all.vercel.app',
        }),
      }
    );

    if (!response.ok) {
      console.error(
        'Failed to fetch access token:',
        response.statusText
      );
      return;
    }

    const data = await response.json();
    console.log('Access Token:', data.access_token);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      if (!code) {
        return;
      }
      setAuthCode(code);
      getAccessToken();
    }
  }, []);

  return (
    <div>
      <h1>Page</h1>
      <Button onClick={handleClick}>Authorize</Button>
    </div>
  );
};

export default Page;
