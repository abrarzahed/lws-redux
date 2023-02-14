import { useSelector } from "react-redux";
import { selectFilter } from "../features/filters/filterSelectore";
import {
  selectAllVideos,
  selectUnWatchedVideos,
  selectWatchedVideos,
} from "../features/videos/videosSelectors";
import VideoItem from "./VideoItem";

export default function AllVideos() {
  const filter = useSelector(selectFilter);

  const videos = useSelector((state) => {
    if (filter === "all") return selectAllVideos(state);
    if (filter === true) return selectWatchedVideos(state);
    if (!filter) return selectUnWatchedVideos(state);
  });

  console.log("[AllVideos] renders");

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
