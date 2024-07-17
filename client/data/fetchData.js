export const fetchData = async (endpoint) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${process.env.TOKEN_STRAPI}`,
      },
    };
    const responseObj = await fetch(
      `${process.env.BASE_URL_STRAPI}${endpoint}`,
      mergedOptions
    );
    const data = responseObj.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};
