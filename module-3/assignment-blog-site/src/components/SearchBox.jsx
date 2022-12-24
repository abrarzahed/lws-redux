import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchTermChanged } from "../redux/actions";

export default function SearchBox() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // debounce handler
  function debounce(fn, delay) {
    let timeOut;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn();
    }, delay);
  }

  // handle input change and update filter's search term
  const handleInputChange = () => {
    dispatch(searchTermChanged(input));
  };

  useEffect(() => {
    debounce(handleInputChange, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        name="search"
        placeholder="Search"
      />
      <img
        className="inline h-6 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
      />
    </div>
  );
}
