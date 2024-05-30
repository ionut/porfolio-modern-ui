export const getBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL_STRAPI}/api/blogs?populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer  ${process.env.TOKEN_STRAPI}`,
        },
        cache: "no-store",
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
