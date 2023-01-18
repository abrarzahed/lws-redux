import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterReset } from "../../features/filter/filterSlice";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Loading from "../utilities/Loading";
import Tag from "./Tag";

export default function Tags() {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );
  const {
    tags: filterTags,
    author,
    searchTerm,
  } = useSelector((state) => state.filters);

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

  const handleResetFilters = () => {
    dispatch(filterReset());
  };

  let active = "";
  if (filterTags.length > 0 || searchTerm !== "" || author !== "") {
    active = `bg-slate-600 text-white`;
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
        <button
          className={`${active} ml-auto bg-slate-100 text-slate-700 font-bold px-4 py-1 rounded-full cursor-pointer`}
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}
