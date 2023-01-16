import axios from "../../components/utilsFunctions/axios";

export const getVideos = async ({ tags, searchTerm }) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchTerm !== "") {
    queryString += `&q=${searchTerm}`;
  }
  const response = await axios.get(`/videos/?${queryString}`);
  return response.data;
};
