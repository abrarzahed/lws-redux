import axios from "../../components/utilsFunctions/axios";

export const getVideos = async () => {
  const response = await axios.get("/videos");
  return response.data;
};
