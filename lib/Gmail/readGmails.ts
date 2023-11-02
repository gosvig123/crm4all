'use client';

// filename: ReadEmails.ts

import { htmlToText } from 'html-to-text';

type Email = {
  subject: string;
  from: string;
  date: string;
  body: string;
};

export const listEmails = async (gapi: any): Promise<Email[]> => {

  try {
    if (!gapi || !gapi.client || !gapi.client.gmail) {
      throw new Error('Failed to load gapi client or Gmail API');
    }

    const response = await gapi.client.gmail.users.messages.list({
      userId: 'me',
      labelIds: ['INBOX'],
      q: 'is:unread',
    });

    const messageDetails = await Promise.all(
      response.result.messages.map((message: any) =>
        gapi.client.gmail.users.messages.get({
          userId: 'me',
          id: message.id,
        })
      )
    );

    const emails: Email[] = messageDetails.map(
      (messageDetail: any) => {
        if (
          messageDetail.result.payload &&
          messageDetail.result.payload.headers
        ) {
          const headers = messageDetail.result.payload.headers;
          const subjectHeader = headers.find(
            (header: any) => header.name === 'Subject'
          );
          const fromHeader = headers.find(
            (header: any) => header.name === 'From'
          );
          const dateHeader = headers.find(
            (header: any) => header.name === 'Date'
          );

          const subject = subjectHeader ? subjectHeader.value : '';
          const from = fromHeader ? fromHeader.value : '';
          const date = dateHeader ? dateHeader.value : '';

          if (
            messageDetail.result.payload &&
            messageDetail.result.payload.parts
          ) {
            const emailData = messageDetail.result.payload.parts.find(
              (part: any) => part.mimeType === 'text/html'
            );
            if (emailData) {
              // Replace URL-safe Base64 encoding characters
              const base64String = emailData.body.data
                .replace(/-/g, '+')
                .replace(/_/g, '/');
              // Decode the Base64 string to HTML
              const decodedHtml = atob(base64String);
              // Convert the HTML to plain text
              const body = decodedHtml;
              return { subject, from, date, body };
            }
          }
        }
        return { subject: '', from: '', date: '', body: '' };
      }
    );

    console.log(emails);
    return emails;
  } catch (error) {
    console.error('Failed to list emails:', error);
    throw error; // Propagate the error to be handled by the calling function
  }
};
