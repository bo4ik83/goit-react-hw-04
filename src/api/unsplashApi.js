const ACCESS_KEY = "XOkCJE9pP5BhzNOH8rQ4Q-m7V7K5h50bDQYafd_rTwk";

export const searchImages = async (query) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  return await response.json();
};
