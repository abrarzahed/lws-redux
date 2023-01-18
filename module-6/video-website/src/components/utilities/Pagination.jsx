import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { limitUpdated } from "../../features/filter/filterSlice";

export default function Pagination() {
  const { limit } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [stateLimit, setLimit] = useState(limit);
  const handleUpdateLimit = (limitNum) => {
    setLimit(limitNum);

    dispatch(limitUpdated(limitNum));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          className={`${
            stateLimit === 4
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handleUpdateLimit(4)}
        >
          1
        </div>
        <div
          className={`${
            stateLimit === 8
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handleUpdateLimit(8)}
        >
          2
        </div>
        <div
          className={`${
            stateLimit === 12
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600"
          } px-4 py-1 rounded-full cursor-pointer`}
          onClick={() => handleUpdateLimit(12)}
        >
          3
        </div>
      </div>
    </section>
  );
}
