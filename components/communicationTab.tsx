'use client'; // 'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { listEmails } from '@/lib/Gmail/readGmails';
import { authorizeAndInitialize } from '@/lib/Gmail/GmailAuth';
import { useState, useEffect, useRef } from 'react';

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

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  useEffect(() => {
    const fetchEmails = async () => {
      console.log('Fetching emails with gapi:', gapi);
      if (isLoading || !gapi) return;
      const emailData = await listEmails(gapi);
      if (!emailData) return;
      setEmails(emailData);
    };

    fetchEmails();
  }, [gapi, isLoading]);

  const accordionContentRef = useRef<HTMLDivElement | null>(null);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Accordion
      type='single'
      collapsible
      className='w-full h-[90vh] mt-5 overflow-y-auto'
    >
      {emails.map((email, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className='bg-white text-black border border-dotted p-2 flex flex-row overflow-hidden'>
            <div className='font-bold text-left w-1/2 overflow-hidden flex-1 text-ellipsis whitespace-nowrap'>
              {email.subject}
            </div>
            <div className='text-sm'>
              Date: {formatDate(email.date)}
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='bg-white text-black max-h[50vh] overflow-auto'
            ref={accordionContentRef}
          >
            <div dangerouslySetInnerHTML={{ __html: email.body }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionDemo;
