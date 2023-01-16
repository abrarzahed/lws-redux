import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosAsync } from "../../features/videos/videosSlice";
import Loading from "../utilities/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const { tags, searchTerm } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchVideosAsync({ tags, searchTerm }));
  }, [dispatch, tags, searchTerm]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No video found</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos?.map((video) => (
      <VideoGridItem video={video} key={video.id} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
