'use client';
// filename: ReadEmails.ts// filename: ReadEmails.ts

// filename: ReadEmails.ts
import { gapi } from 'gapi-script';
import { htmlToText } from 'html-to-text';

export const listEmails = async (gapi: any) => {
  try {
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

    const plainTextEmails = messageDetails.map(
      (messageDetail: any) => {
        if (
          messageDetail.result.payload &&
          messageDetail.result.payload.parts
        ) {
          const emailData = messageDetail.result.payload.parts.find(
            (part: any) => part.mimeType === 'text/html'
          );
          if (emailData) {
            // Replace URL-safe Base64 encoding characters
            const base64String = emailData.body.data.replace(/-/g, '+').replace(/_/g, '/');
            // Decode the Base64 string to HTML
            const decodedHtml = atob(base64String);
            // Convert the HTML to plain text
            return htmlToText(decodedHtml, { wordwrap: 130 });
          }
        }
        return '';
      }
    );

    console.log(plainTextEmails);
    return plainTextEmails;
  } catch (error) {
    console.error('Failed to list emails:', error);
  }
};
