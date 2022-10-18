import { useMemo } from "react";

export const useShop = (posts, search) => {
  const shopPosts = useMemo(() => {
    return posts.filter((item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [posts, search]);

  return shopPosts;
};
