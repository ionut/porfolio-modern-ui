import { unstable_noStore as noStore } from "next/cache";

export const fetchData = async (endpoint) => {
  noStore();
  try {
    const res = await fetch(`${process.env.BASE_URL_STRAPI}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${process.env.TOKEN_STRAPI}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};
