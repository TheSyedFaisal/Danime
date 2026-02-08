import { BASE_URL } from "./constant";

export const getHotSellersProducts = async () => {
  try {
    const url = `${BASE_URL}/api/hot-sellers?populate=*`;
    const resp = await fetch(url, {
      cache: "no-store",
    });

    if (!resp.ok) {
      throw new Error(`Failed to fetch: ${resp.status} ${resp.statusText}`);
    }

    const result = await resp.json();
    return result.data || [];
  } catch (error) {
    console.error("There was an error getting hot sellers:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const url = `${BASE_URL}/api/products?populate=*`;
    const resp = await fetch(url, {
      cache: "no-store",
    });
    const result = await resp.json();
    return result.data || [];
  } catch (error) {
    console.error("There was an error getting products", error);
    return [];
  }
};

export const getCollectionBySlug = async (slug: string) => {
  try {
    if (!BASE_URL) {
      console.error("BASE_URL is not defined in environment variables");
      return null;
    }

    // Use indexed population to avoid "image.related" validation errors in some Strapi versions
    // populate[0] = Top level image
    // populate[1] = Related products and their nested population (images, sizes, etc.)
    const url = `${BASE_URL}/api/products?filters[slug][$eq]=${slug}&populate[0]=image&populate[1]=products&populate[2]=products.images&populate[3]=products.productImages&populate[4]=products.productSize&populate[5]=products.videoUrl`;

    console.log("Fetching collection by slug:", slug, "URL:", url);

    const resp = await fetch(url, {
      cache: "no-store",
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error(
        `API response error: ${resp.status} ${resp.statusText}`,
        errorText,
      );
      return null;
    }

    const result = await resp.json();
    console.log("API Result for slug:", slug, result);
    return result.data?.[0] || null;
  } catch (error) {
    console.error(
      `There was an error getting collection for slug ${slug}`,
      error,
    );
    return null;
  }
};
