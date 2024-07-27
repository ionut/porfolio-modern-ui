import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.TOKEN_GIT_HUB,
});
export const fetchGitHubRepos = async () => {
  try {
    const res = await octokit.request("GET /users/{username}/repos", {
      username: "ionut",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
