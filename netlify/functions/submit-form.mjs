// Netlify Function to proxy Google Forms submissions
// This forwards form submissions to Google Forms with proper headers

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the incoming form data
    const { formUrl, formData } = JSON.parse(event.body);

    if (!formUrl || !formData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing formUrl or formData' }),
      };
    }

    // Convert the formData object to URLSearchParams
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(formData)) {
      if (Array.isArray(value)) {
        // Handle multiple values for the same key (checkboxes)
        value.forEach(v => params.append(key, v));
      } else {
        params.append(key, value);
      }
    }

    // Debug: Log what we're sending to Google Forms
    console.error('=== SUBMITTING TO GOOGLE FORMS ===');
    console.error('URL:', formUrl);
    console.error('Data:', params.toString());
    console.error('Data (parsed):');
    for (const [key, value] of params.entries()) {
      console.error(`  ${key} = ${value}`);
    }

    // Forward the request to Google Forms with proper headers
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': formUrl.replace('/formResponse', '/viewform'),
      },
      body: params.toString(),
    });

    // Debug: Log the response
    const responseText = await response.text();
    console.error('=== GOOGLE FORMS RESPONSE ===');
    console.error('Status:', response.status);
    console.error('Headers:', Object.fromEntries(response.headers.entries()));
    console.error('Response body (first 500 chars):', responseText.substring(0, 500));

    // Google Forms typically redirects on success
    if (response.ok || response.status === 302 || response.status === 303) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Form submission failed', status: response.status }),
      };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', message: error.message }),
    };
  }
}
