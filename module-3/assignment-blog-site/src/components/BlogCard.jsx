import { useDispatch } from "react-redux";
import { authorChanged, categoryChanged } from "../redux/actions";

export default function BlogCard({ blog }) {
  const dispatch = useDispatch();
  const { category, title, author, image } = blog;

  // handle category change
  const handleCategoryChange = (cate) => {
    dispatch(categoryChanged(cate));
  };
  // handle author change
  const handleAuthorChange = (name) => {
    dispatch(authorChanged(name));
  };
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt="" />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={() => handleCategoryChange(category)}
              className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {category}
            </span>
          </p>
          <a href="/" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={author.image} alt="" />
          </div>
          <div className="ml-3">
            <p
              onClick={() => handleAuthorChange(author.name)}
              className="cursor-pointer text-sm font-medium text-gray-900 hover:underline"
            >
              {author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">11 Jul, 2022</time>
              <span aria-hidden="true">&middot;</span>
              <span> {author.timeToRead} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
