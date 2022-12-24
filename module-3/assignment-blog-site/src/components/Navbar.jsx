import { useDispatch } from "react-redux";
import { resetFilters } from "../redux/actions";

export default function Navbar() {
  const dispatch = useDispatch();

  // handle reset filters
  const handleReset = () => {
    dispatch(resetFilters());
  };
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-6xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <h2 className="font-bold text-2xl text-indigo-800">RDX BLOGS</h2>
        <button
          onClick={handleReset}
          className="bg-indigo-100 px-4 py-1 text-indigo-800 font-semibold rounded-full"
        >
          All Blogs
        </button>
      </div>
    </nav>
  );
}
