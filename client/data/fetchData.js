import { unstable_noStore as noStore } from "next/cache";

export const fetchData = async (endpoint) => {
  noStore();
  try {
    const res = await fetch(`${process.env.BASE_URL_STRAPI}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer  ${process.env.TOKEN_STRAPI}`,
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
