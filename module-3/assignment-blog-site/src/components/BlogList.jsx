import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const allBlogs = useSelector((state) => state.blogs);
  const filters = useSelector((state) => state.filters);

  let { author, searchTerm, category } = filters;
  searchTerm = searchTerm.toLowerCase().trim();

  const filteredBlogs = allBlogs
    .filter((blog) => {
      switch (category) {
        case "All":
          return blog.category === "";

        case "Article":
          return blog.category === "Article";

        case "Tech":
          return blog.category === "Tech";

        default:
          return blog;
      }
    })
    .filter((blog) => {
      switch (author) {
        case "":
          return blog;
        case "Learn with Abrar":
          return blog.author.name === "Learn with Abrar";

        case "Learn with sumit":
          return blog.author.name === "Learn with sumit";

        default:
          return blog;
      }
    })
    .filter((blog) => {
      if (searchTerm === "") {
        return blog;
      } else if (blog.title.toLowerCase().includes(searchTerm)) {
        return blog.title.toLowerCase().includes(searchTerm);
      } else {
        return false;
      }
    });
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {/* <!-- single card  --> */}
      {filteredBlogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
