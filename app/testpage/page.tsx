'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [authCode, setAuthCode] = useState<string | null>(null);

  const handleClick = () => {
    window.location.href =
      'https://api.typeform.com/oauth/authorize?client_id=5vujD8k4DQ97UMeHycGqiyZ5yKdiFj7Uyuo8iAB1o1wg&redirect_uri=https://crm4all.vercel.app/testpage/&scope=forms:read+forms:write';
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setAuthCode(code);
      fetchToken(code);
    }
  }, []);

  const fetchToken = async (code: string) => {
    const response = await fetch('/api/typeform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Page</h1>
      <Button onClick={handleClick}>Authorize</Button>
    </div>
  );
};

export default Page;
