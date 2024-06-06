import axios from "axios";

// Subscription handler function
export async function POST(req, res) {
  const resp = await req.json();
  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: resp.email,
    status: "subscribed",
  };

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options);
    if (response.status == 200) {
      return new Response("Awesome! You have successfully subscribed!", {
        status: 200,
      });
    }
  } catch (error) {
    if (error.response) {
      if (error.response?.data.title == "Member Exists") {
        return new Response(
          "Uh oh, it looks like this email's already subscribed🧐",
          {
            status: 400,
          }
        );
      }
    }

    return new Response(
      "Oops! There was an error subscribing you to the newsletter. Please email me at ionuthusoschi@gmail.com and I'll add you to the list.",
      {
        status: 500,
      }
    );
  }
}
