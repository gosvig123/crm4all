export async function GET(request: Request) {
  console.log('typeform');

  return new Response('response typeform');
}

export async function POST(request: Request) {
  const decodedRequest = await request.json();

  const authorizationCode = decodedRequest.code;
  const response = await fetch(
    'https://api.typeform.com/oauth/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: authorizationCode,
        client_id: '5vujD8k4DQ97UMeHycGqiyZ5yKdiFj7Uyuo8iAB1o1wg',
        client_secret: 'Gnr5fup1gauwC8GhHV9XyPDacGh5typQsUK6ZKp4AJUr',
        redirect_uri: 'https://crm4all.vercel.app/testpage/',
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

  console.log(data);

  return new Response(JSON.stringify(data));
}
