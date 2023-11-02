// 'EmailComposer.tsx'

'use client';
import { Button } from './ui/button';
import React, { useState } from 'react';
import { sendEmail } from '@/lib/Gmail/sendEmail';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type EmailComposerProps = {
  gapi: any;
  from: string;
};

export function EmailComposer({ gapi, from }: EmailComposerProps) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSendEmail = async () => {
    if (!gapi || !to || !subject || !body) {
      alert('Please fill out all fields');
      return;
    }

    try {
      await sendEmail(gapi, to, subject, body);
      alert('Email sent successfully');
      setTo('');
      setSubject('');
      setBody('');
    } catch (error) {
      alert('Failed to send email');
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col gap-3 text-black  shadow-2xl'>
      <Input
        type='email'
        placeholder='To'
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        placeholder='Email body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button className='mt-5  w-full' onClick={handleSendEmail}>
        Send
      </Button>
    </div>
  );
}
