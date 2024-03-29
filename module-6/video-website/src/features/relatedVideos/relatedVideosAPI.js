import axios from "../../components/utilsFunctions/axios";

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;
  const response = await axios.get(`/videos?${queryString}`);

  return response.data;
};
