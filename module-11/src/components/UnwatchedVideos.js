import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoizedFilteredVideos } from "../features/videos/videosSelectors";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
  const selectUnwatchedVideos = useMemo(selectMemoizedFilteredVideos, []);
  const unwatchedVideos = useSelector((state) =>
    selectUnwatchedVideos(state, false)
  );

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
