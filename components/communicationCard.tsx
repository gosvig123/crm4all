'use client'; // 'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { listEmails } from '@/lib/Gmail/readGmails';
import { authorizeAndInitialize } from '@/lib/Gmail/GmailAuth';
import { useState, useEffect } from 'react';

type Email = {
  subject: string;
  from: string;
  date: string;
  body: string;
};

export function AccordionDemo() {
  const [gapi, setGapi] = useState<any>(null);
  const [emails, setEmails] = useState<Email[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGapi = async () => {
      console.log('Initializing gapi...');
      const gapiInstance = await authorizeAndInitialize();
      console.log('Gapi initialized:', gapiInstance);
      setGapi(gapiInstance);
      setIsLoading(false); 
    };

    loadGapi();
  }, []);

  useEffect(() => {
    const fetchEmails = async () => {
      console.log('Fetching emails with gapi:', gapi);
      if (isLoading || !gapi) return; // Return early if gapi is not yet initialized
      const emailData = await listEmails(gapi);
      if (!emailData) return;
      setEmails(emailData);
    };

    fetchEmails();
  }, [gapi, isLoading]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Accordion type='single' collapsible className='w-full mt-5'>
      {emails.map((email, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className='bg-white text-black border border-dotted p-2'>
            <div className='font-bold'>{email.subject}</div>
            <div className='text-sm'>
              From: {email.from} | Date: {email.date}
            </div>
          </AccordionTrigger>
          <AccordionContent>{email.body}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionDemo;
