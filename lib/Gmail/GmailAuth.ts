'use client';
// filename: GmailAuth.ts
import { gapi } from 'gapi-script';

const CLIENT_ID =
  '44320021799-16dmrnsvp301qk46ueh55mh5jm6kk37i.apps.googleusercontent.com';
const API_KEY = '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';
const SCOPES =
  'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';

export const authorizeGmail = async () => {
  try {
    await gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
      await gapi.auth2.getAuthInstance().signIn();
      const isSignedIn = gapi.auth2
        .getAuthInstance()
        .isSignedIn.get();
      if (isSignedIn) {
        console.log('Authorization succeeded');
      } else {
        console.log('User is not signed in');
      }
    });
  } catch (error) {
    console.error('Authorization failed:', error);
  }
};

export const initializeGmailAPI = async () => {
  try {
    await gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
        ],
        scope: SCOPES,
      });
      console.log('Gmail API client initialized:', gapi.client.gmail);
    });
  } catch (error) {
    console.error('Failed to initialize Gmail API client:', error);
  }
};

export const authorizeAndInitialize = async () => {
  await authorizeGmail();
  await initializeGmailAPI();
  return gapi; // return gapi instance here
};
