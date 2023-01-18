import axios from "../../components/utilsFunctions/axios";

export const getVideos = async ({ tags, searchTerm, limit }) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchTerm !== "") {
    queryString += `&q=${searchTerm}`;
  }
  const response = await axios.get(`/videos/?${queryString}&_limit=${limit}`);
  return response.data;
};
