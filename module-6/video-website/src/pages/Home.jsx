import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Pagination from "../components/utilities/Pagination";
export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
