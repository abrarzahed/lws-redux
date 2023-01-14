import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Loading from "../utilities/Loading";
import Tag from "./Tag";

export default function Tags() {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && tags?.length === 0) {
    content = <div className="col-span-12">No tags found</div>;
  }
  if (!isLoading && !isError && tags?.length > 0) {
    content = tags?.map((tag) => <Tag tag={tag} key={tag.id} />);
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}
