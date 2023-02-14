import { useSelector } from "react-redux";
import { selectMemoizedUnwatchedVideos } from "../features/videos/videosSelectors";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
  const unwatchedVideos = useSelector(selectMemoizedUnwatchedVideos);

  console.log("[unwatchedVideos] renders");

  return (
    <div>
      <ul className="divide-y divide-slate-200">
        {unwatchedVideos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
