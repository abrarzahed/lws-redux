import axios from "../../components/utilsFunctions/axios";

export const getVideos = async ({ tags, searchTerm, limit, author }) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchTerm !== "") {
    queryString += `&q=${searchTerm}`;
  }
  if (author !== "") {
    queryString += `&q=${searchTerm}`;
  }
  const response = await axios.get(
    `/videos/?${queryString}&author_like=${author}&_limit=${limit}`
  );
  return response.data;
};
