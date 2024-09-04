import { Octokit } from "octokit";
import { revalidateTag, unstable_cache, unstable_noStore } from "next/cache";

const octokit = new Octokit({
  auth: process.env.TOKEN_GIT_HUB,
});

export async function GET(request) {
  unstable_noStore();
  try {
    const res = await octokit.request("GET /users/{username}/repos", {
      username: "ionut",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return Response.json(res.data);
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}
