import { BASE_URL } from "./constant";

export const getHotSellersProducts = async () => {
  try {
    const url = `${BASE_URL}/api/hot-sellers?populate=*`;
    const resp = await fetch(url, {
      cache: "no-store",
    });
    return resp.json();
  } catch (error) {
    console.error("There was an error getting industries", error);
    return [];
  }
};
