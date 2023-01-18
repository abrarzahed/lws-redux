import axios from "../../components/utilsFunctions/axios";
export const getVideo = async (videoId) => {
  const response = await axios.get(`/videos/${videoId}`);
  return response.data;
};
export const updateLikes = async ({ videoId, likes }) => {
  const response = await axios.patch(`/videos/${videoId}`, {
    likes: likes + 1,
  });
  return response.data;
};
export const updateUnlikes = async ({ videoId, unlikes }) => {
  const response = await axios.patch(`/videos/${videoId}`, {
    unlikes: unlikes + 1,
  });
  return response.data;
};
