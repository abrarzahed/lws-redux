import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ tag = {} }) {
  const dispatch = useDispatch();

  const { title } = tag;
  const { tags } = useSelector((state) => state.filters);

  const selectTag = (tagTitle) => {
    if (!tags.includes(tagTitle)) {
      dispatch(tagSelected(tagTitle));
    }
    if (tags.includes(tagTitle)) {
      dispatch(tagRemoved(tagTitle));
    }
  };

  return (
    <>
      <div
        onClick={() => selectTag(title)}
        className={`${
          !tags.includes(title)
            ? "bg-blue-100 text-blue-600"
            : "bg-blue-600 text-white"
        } px-4 py-1 rounded-full cursor-pointer`}
      >
        {title}
      </div>
      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div> */}
    </>
  );
}
