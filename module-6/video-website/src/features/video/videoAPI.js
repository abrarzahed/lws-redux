import axios from "../../components/utilsFunctions/axios";
export const getVideo = async (videoId) => {
  const response = await axios.get(`/videos/${videoId}`);
  return response.data;
};
